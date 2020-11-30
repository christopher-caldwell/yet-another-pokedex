import { Page } from 'puppeteer'

import { Pokemon, PokemonTypeName } from '../../../shared-types/pokemon'
import { types } from '../../../db/seed-data/types'

export const waitForMs = async (waitDurationInMs: number) =>
  new Promise(resolve => setTimeout(resolve, waitDurationInMs))

export const loadAllPokemon = async (page: Page) => {
  await waitForMs(2000)
  await page.evaluate(() => {
    window.scrollBy(0, window.innerHeight)
  })
  await waitForMs(500)

  await page.waitForSelector('.container > .section > .content-block > #loadMore > .button-lightblue')
  await page.click('.container > .section > .content-block > #loadMore > .button-lightblue')
}

export const handlePerPokemonPage = async (page: Page, index: number, pokemon: Pokemon[]): Promise<void> => {
  const pokemonNumber = index + 1
  const cssSelectorForTypes = `.results > li:nth-child(${pokemonNumber}) > .pokemon-info > .abilities`
  await page.waitForSelector(cssSelectorForTypes)
  await page.hover(cssSelectorForTypes)

  // await page.click('.results > li:nth-child(1) > .pokemon-info > .abilities > .background-color-grass')

  const currentPokemon = await constructPokemon(page, cssSelectorForTypes, pokemonNumber)

  pokemon.push(currentPokemon)
}

const constructPokemon = async (page: Page, cssSelectorForTypes: string, pokemonNumber: number): Promise<Pokemon> => {
  const cssSelectorForPokemonName = `.section > .results > li:nth-child(${pokemonNumber}) > .pokemon-info > h5`
  await page.waitForSelector(cssSelectorForPokemonName)
  const nameElements = await page.$(cssSelectorForPokemonName)
  const pokemonName = await page.evaluate(elm => elm.innerText, nameElements)

  const typeElements = await page.$$(cssSelectorForTypes)
  const pokemonTypes: PokemonTypeName[] = []
  for (let name of typeElements) {
    const text = await page.evaluate(elm => elm.innerText, name)
    console.log('text', text)
    pokemonTypes.push(text.toLowerCase())
  }

  const resistant = constructResistantToArray(pokemonTypes)

  return {
    id: pokemonNumber,
    name: pokemonName,
    types: pokemonTypes,
    resistant,
    weaknesses: [],
  }
}

export const lowercaseEachElementInArray = (arrayToLowercase: PokemonTypeName[]): PokemonTypeName[] => {
  return arrayToLowercase.map(element => element.toLowerCase()) as PokemonTypeName[]
}

export const constructResistantToArray = (pokemonTypes: PokemonTypeName[]): PokemonTypeName[] => {
  const resistantTo: PokemonTypeName[] = []
  pokemonTypes.forEach(type => {
    const correspondingType = types[type]
    correspondingType.defendsWellAgainst.forEach(defendsWellAgainst => {
      resistantTo.push(defendsWellAgainst)
    })
  })
  return [...new Set(resistantTo)]
}

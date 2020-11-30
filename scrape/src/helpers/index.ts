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
  await page.waitForSelector(`.results > li:nth-child(${pokemonNumber}) > .pokemon-info > .abilities`)

  const currentPokemon = await constructPokemon(page)

  pokemon.push(currentPokemon)

  await page.goBack()
  // await page.waitForNavigation()

  await loadAllPokemon(page)
  // await page.waitForNavigation()
}

export const handlePerPokemon = async (page: Page, index: number, pokemon: Pokemon[]): Promise<void> => {
  const pokemonNumber = index + 1
  await page.waitForSelector(`.results > li:nth-child(${pokemonNumber}) > figure > a > img`)
  await page.click(`.results > li:nth-child(${pokemonNumber}) > figure > a > img`)
  // const selectorPath = `.results > li:nth-child(${pokemonNumber}) > .pokemon-info > .abilities`
  // await page.waitForSelector(selectorPath)
  // await page.click(selectorPath)

  const currentPokemon = await constructPokemon(page)

  pokemon.push(currentPokemon)

  await page.goBack()
  // await page.waitForNavigation()

  await loadAllPokemon(page)
  // await page.waitForNavigation()
}

const constructPokemon = async (page: Page): Promise<Pokemon> => {
  await page.waitForSelector('.pokedex-pokemon-pagination-title')
  const nameElement = await page.$('.pokedex-pokemon-pagination-title div')
  // console.log(elm)
  const text = await page.evaluate(elm => elm.innerText, nameElement)

  const [name, numberWithOctothorpe] = text.trim().split(' ')

  const id = numberWithOctothorpe.split('#')[1]

  // Get Types
  const typesElement = await page.$('.dtm-type ul')
  const typesRawText = await page.evaluate(elm => elm.innerText, typesElement)
  const pokemonTypes = lowercaseEachElementInArray(typesRawText.split('\n'))

  // Get Weaknesses
  const weaknessesElement = await page.$('.dtm-weaknesses ul')
  const weaknessRawText = await page.evaluate(elm => elm.innerText, weaknessesElement)
  const weaknesses = lowercaseEachElementInArray(weaknessRawText.split('\n'))

  const resistant = constructResistantToArray(pokemonTypes)

  return {
    id,
    name,
    types: pokemonTypes,
    resistant,
    weaknesses: weaknesses,
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

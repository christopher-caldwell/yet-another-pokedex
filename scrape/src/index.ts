import { launch, Page } from 'puppeteer'

import { Pokemon, PokemonTypeName } from '../../shared-types/pokemon'
import { types } from '../../db/seed-data/types'

const waitForMs = async (waitDurationInMs: number) => new Promise(resolve => setTimeout(resolve, waitDurationInMs))

const pokemon: Pokemon[] = []

const main = async () => {
  const browser = await launch({
    headless: true,
  })
  const page = await browser.newPage()
  // page.setDefaultNavigationTimeout(0)

  await page.goto('https://www.pokemon.com/us/pokedex/')
  await waitForMs(500)

  await page.setViewport({ width: 1792, height: 1200 })

  for (let iterator = 0; iterator < 100; iterator++) {
    await handlePerPokemon(page, iterator)
    console.log('pokemon', pokemon)
  }
}

const loadAllPokemon = async (page: Page) => {
  await waitForMs(2000)
  await page.evaluate(() => {
    window.scrollBy(0, window.innerHeight)
  })
  await waitForMs(500)

  await page.waitForSelector('.container > .section > .content-block > #loadMore > .button-lightblue')
  await page.click('.container > .section > .content-block > #loadMore > .button-lightblue')
}

const handlePerPokemon = async (page: Page, pokemonNumber: number): Promise<void> => {
  const indexOfChild = pokemonNumber + 1
  const navigationPromise = page.waitForNavigation()
  await page.waitForSelector(`.results > .animating:nth-child(${indexOfChild}) > figure > a > img`)
  await page.click(`.results > .animating:nth-child(${indexOfChild}) > figure > a > img`)

  await navigationPromise

  const currentPokemon = await constructPokemon(page)

  pokemon.push(currentPokemon)

  await page.goBack()
  await navigationPromise

  await loadAllPokemon(page)
  await navigationPromise
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

const lowercaseEachElementInArray = (arrayToLowercase: PokemonTypeName[]): PokemonTypeName[] => {
  return arrayToLowercase.map(element => element.toLowerCase()) as PokemonTypeName[]
}

const constructResistantToArray = (pokemonTypes: PokemonTypeName[]): PokemonTypeName[] => {
  const resistantTo: PokemonTypeName[] = []
  pokemonTypes.forEach(type => {
    const correspondingType = types[type]
    correspondingType.defendsWellAgainst.forEach(defendsWellAgainst => {
      resistantTo.push(defendsWellAgainst)
    })
  })
  return [...new Set(resistantTo)]
}

main()

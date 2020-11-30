import { launch } from 'puppeteer'

import { Pokemon } from '../../shared-types/pokemon'
import { handlePerPokemonPage, loadAllPokemon } from './helpers/'

const pokemon: Pokemon[] = []

const main = async () => {
  const browser = await launch({
    headless: false,
  })
  const page = await browser.newPage()
  // page.setDefaultNavigationTimeout(0)

  await page.goto('https://www.pokemon.com/us/pokedex/')
  await page.waitForNavigation()

  await page.setViewport({ width: 1792, height: 1200 })

  await loadAllPokemon(page)


  for (let iterator = 0; iterator < 100; iterator++) {
    await handlePerPokemonPage(page, iterator, pokemon)
    console.log('pokemon', pokemon[iterator])
  }
}

main()

import PokedexPromise, { PokemonSpecies, Pokemon as PromisePokemon } from 'pokedex-promise-v2'
import capitalize from 'lodash.capitalize'
import { writeFileSync } from 'fs'

import { Pokemon } from '../../../shared-types/pokemon'
import { waitForMs, PokemonProgressBar } from './utils'
import {
  getMostEffectiveTypes,
  getFightWithTypes,
  extractStringTypesFromNestedTypes,
  getAvoidTypes,
  getNoEffectTypes,
  getDescriptionFromFlavors,
} from './data-linking'

const Pokedex = new PokedexPromise()
const numPokemon = 897
const msToWaitBetweenPokemon = 1000

/**
 * TODO:
 * Add evolution chain
 * Consider adding location caught
 */

const scrapePokemon = async (id: number): Promise<Pokemon> => {
  const { name, types: nestedTypes } = (await Pokedex.getPokemonByName(id)) as unknown as PromisePokemon
  const { flavor_text_entries } = (await Pokedex.getPokemonSpeciesByName(id)) as unknown as PokemonSpecies
  const types = extractStringTypesFromNestedTypes(nestedTypes)
  // const evolutionId = getEvolutionIdFromUrl(species.evolution_chain.url)
  // const evolutionChain = (await Pokedex.getEvolutionChainById(evolutionId)) as unknown as EvolutionChain
  return {
    id,
    name: capitalize(name),
    types,
    mostEffectiveTypes: getMostEffectiveTypes(types),
    superEffectiveTypes: getFightWithTypes(types),
    notVeryEffectiveTypes: getAvoidTypes(types),
    noEffectTypes: getNoEffectTypes(types),
    // 0 index is english
    description: getDescriptionFromFlavors(flavor_text_entries),
    imageUrl: `@/assets/official-artwork/${id}.png`,
  }
}
const getPokemon = async () => {
  const pokemon: Pokemon[] = []
  PokemonProgressBar.start(numPokemon, 0)
  for (let iterator = 896; iterator <= numPokemon; iterator++) {
    try {
      const targetPokemon = await scrapePokemon(iterator)
      // const evolutionId = getEvolutionIdFromUrl(species.evolution_chain.url)
      // const evolutionChain = (await Pokedex.getEvolutionChainById(evolutionId)) as unknown as EvolutionChain
      pokemon.push(targetPokemon)
      await waitForMs(msToWaitBetweenPokemon)
      PokemonProgressBar.increment()
    } catch (e) {
      console.error('error', e)
    }
  }
  return pokemon
}

const writePokemon = async (): Promise<void> => {
  const pokemon = await getPokemon()
  writeFileSync('./missingPokemon.json', JSON.stringify(pokemon))
}

writePokemon()

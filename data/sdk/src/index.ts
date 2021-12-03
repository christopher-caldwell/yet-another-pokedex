import PokedexPromise, { EvolutionChain, Pokemon, PokemonSpecies } from 'pokedex-promise-v2'

import { waitForMs } from './utils'
import { getEvolutionIdFromUrl } from './data-linking'

const Pokedex = new PokedexPromise()
const numPokemon = 2
const msToWaitBetweenPokemon = 1000

/**
 * TODO:
 * Consider both types if present
 * Fix logic bug with type weakness / strength
 * Add description
 * Add evolution chain
 * Consider adding location caught
 */

const getPokemon = async () => {
  for (let iterator = 1; iterator < numPokemon; iterator++) {
    const targetPokemon = (await Pokedex.getPokemonByName(iterator)) as unknown as Pokemon
    const species = (await Pokedex.getPokemonSpeciesByName(targetPokemon.name)) as unknown as PokemonSpecies
    const evolutionId = getEvolutionIdFromUrl(species.evolution_chain.url)
    const evolutionChain = (await Pokedex.getEvolutionChainById(evolutionId)) as unknown as EvolutionChain
    await waitForMs(msToWaitBetweenPokemon)
  }
}

getPokemon()

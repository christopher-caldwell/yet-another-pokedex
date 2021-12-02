import PokedexPromise, { Pokemon, PokemonSpecies } from 'pokedex-promise-v2'

import { waitForMs } from './utils'
import { getEvolutionIdFromUrl } from './data-linking'

const Pokedex = new PokedexPromise()
const numPokemon = 2
const msToWaitBetweenPokemon = 1000

const getPokemon = async () => {
  for (let iterator = 1; iterator < numPokemon; iterator++) {
    const targetPokemon = (await Pokedex.getPokemonByName(iterator)) as unknown as Pokemon
    const species = (await Pokedex.getPokemonSpeciesByName(targetPokemon.name)) as unknown as PokemonSpecies
    const evolutionId = getEvolutionIdFromUrl(species.evolution_chain.url)
    const evolutionChain = await Pokedex.getEvolutionChainById(evolutionId)
    console.log('evolution chain', evolutionChain)
    await waitForMs(msToWaitBetweenPokemon)
  }
}

getPokemon()

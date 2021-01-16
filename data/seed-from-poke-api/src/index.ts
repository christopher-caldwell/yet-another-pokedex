import axios from 'axios'
import { resolve } from 'path'
import { writeFileSync } from 'fs'

import { PokemonProgressBar } from './helpers/progressBar'
import { PokemonApiResponse } from './types/'
import { handleApiMappingToExpectedType } from './helpers'
import { Pokemon } from '../../../shared-types/pokemon'

const pathForFile = resolve(process.cwd())
const pokeUrl = 'https://pokeapi.co/api/v2'
const generatePokemonEndPoint = (id: number): string => pokeUrl + '/pokemon/' + id

const fetchPokemon = async (pokemonId: number): Promise<Pokemon> => {
  const endpoint = generatePokemonEndPoint(pokemonId)
  const { data } = await axios.get<PokemonApiResponse>(endpoint)
  const pokemon = handleApiMappingToExpectedType(data)
  return pokemon
}

const waitForMs = async (msToWait: number) => new Promise(resolve => setTimeout(resolve, msToWait))

const totalNumberOfPokemon = 898
const main = async () => {
  const pokemon: Pokemon[] = []
  try {
    PokemonProgressBar.start(totalNumberOfPokemon, 0)
    for (let pokemonId = 1; pokemonId < totalNumberOfPokemon; pokemonId++) {
      const currentPokemon = await fetchPokemon(pokemonId)
      pokemon.push(currentPokemon)
      await waitForMs(200)
      PokemonProgressBar.increment()
    }
    writeFileSync(pathForFile + '/seed.json', JSON.stringify(pokemon))
    // console.log('pokemon', pokemon)
  } catch (error) {
    console.error('error', error)
  }
}

main()

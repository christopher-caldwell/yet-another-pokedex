import axios from 'axios'
import { resolve } from 'path'
import { writeFileSync } from 'fs'

import { PokemonApiResponse } from './types/'
import { handleApiMappingToExpectedType } from './helpers'
import { Pokemon } from '../../shared-types/pokemon'

const pathForFile = resolve(process.cwd())
const pokeUrl = 'https://pokeapi.co/api/v2'
const generatePokemonEndPoint = (id: number): string => pokeUrl + '/pokemon/' + id

const fetchPokemon = async (pokemonId: number): Promise<Pokemon> => {
  const endpoint = generatePokemonEndPoint(pokemonId)
  const { data } = await axios.get<PokemonApiResponse>(endpoint)
  const pokemon = handleApiMappingToExpectedType(data)
  return pokemon
}

const main = async () => {
  const pokemon: Pokemon[] = []
  try {
    for (let iterator = 0; iterator < 100; iterator++) {
      const pokemonId = iterator + 1
      const currentPokemon = await fetchPokemon(pokemonId)
      pokemon.push(currentPokemon)
    }
    writeFileSync(pathForFile + '/seed.json', JSON.stringify(pokemon))
    // console.log('pokemon', pokemon)
  } catch (error) {
    console.error('error', error)
  }
}

main()

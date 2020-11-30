import axios from 'axios'

import { PokemonApiResponse } from './types/'
import { handleApiMappingToExpectedType } from './helpers'
import { Pokemon } from '../../shared-types/pokemon'

const pokeUrl = 'https://pokeapi.co/api/v2'
const generatePokemonEndPoint = (id: number): string => pokeUrl + '/pokemon/' + id

const fetchPokemon = async (pokemonId: number): Promise<Pokemon> => {
  const endpoint = generatePokemonEndPoint(pokemonId)
  console.log(endpoint)
  const { data } = await axios.get<PokemonApiResponse>(endpoint)
  const pokemon = handleApiMappingToExpectedType(data)
  return pokemon
}

const main = async () => {
  const pokemon: Pokemon[] = []
  try {
    for (let iterator = 0; iterator < 2; iterator++) {
      const pokemonId = iterator + 1
      const currentPokemon = await fetchPokemon(pokemonId)
      pokemon.push(currentPokemon)
    }
    console.log('pokemon', pokemon)
  } catch (error) {
    console.error('error', error)
  }
}

main()

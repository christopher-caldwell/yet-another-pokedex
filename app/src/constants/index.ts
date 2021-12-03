import numeral from 'numeral'
import { Dimensions } from 'react-native'

export const pokemonImageUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

export const generatePokemonImageUrl = (pokemonId: number): string =>
  pokemonImageUrl + numeral(pokemonId).format('000') + '.png '

export const windowWidth = Dimensions.get('window').width
export const windowHeight = Dimensions.get('window').height

export * from './typeColors'

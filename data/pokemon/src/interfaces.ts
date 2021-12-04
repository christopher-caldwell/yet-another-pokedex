import { PokemonTypeName } from '../../types/src/interfaces'

export interface Pokemon {
  id: number
  name: string
  types: PokemonTypeName[]
  mostEffectiveTypes: PokemonTypeName[]
  superEffectiveTypes: PokemonTypeName[]
  notVeryEffectiveTypes: PokemonTypeName[]
  noEffectTypes: PokemonTypeName[]
  // 0 index is english
  description: string
  imageUrl: string
}
import { PokemonTypeName } from '../../../shared-types/pokemon'

export interface PokemonApiType {
  slot: number
  type: {
    name: PokemonTypeName
    url: string
  }
}

export interface PokemonApiResponse {
  height: number
  id: number
  name: string
  order: number
  species: {
    name: string
    url: string
  }
  sprites: {
    front_default: string
  }
  types: PokemonApiType[]
  weight: number
}

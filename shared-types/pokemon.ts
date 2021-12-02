export type PokemonTypeName =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'steel'
  | 'electric'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'bug'
  | 'ghost'
  | 'dark'
  | 'psychic'
  | 'water'
  | 'fire'
  | 'grass'
  | 'fairy'

export interface Pokemon {
  id: number
  name: string
  /** Types that this pokemon has */
  types: PokemonTypeName[]
  /** Will get a `Not very effective` when this type of move is used against it */
  resistant: PokemonTypeName[]
  /** Will get a `Super effective` when this type of move is used against it */
  weaknesses: PokemonTypeName[]
  imageUrl: string
}

export interface PokemonType {
  name: PokemonTypeName
  color: string
  /** When this type attacks a type from this list, it will have be `Super effective` */
  strongAgainst: PokemonTypeName[]
  /** When this type attacks a type from this list, it will have be `Not very effective` */
  weakAgainst: PokemonTypeName[]
  /** When this types attacks a type from this list, it will have no effect */
  noEffectWhileAttacking?: PokemonTypeName[]
  /** When a type from this list attacks this type, it will have no effect */
  noEffectWhileDefending?: PokemonTypeName[]
  /** When a type from this list attacks this type, it will be `Super effective` */
  vulnerableTo: PokemonTypeName[]
  /** When a type from this list attacks this type, it will be `Not very effective` */
  defendsWellAgainst: PokemonTypeName[]
}

export type PokemonTypeMap = {
  [key in PokemonTypeName]: PokemonType
}

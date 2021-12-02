export const types: PokemonTypeMap = {
  normal: {
    name: 'normal',
    strongAgainst: [],
    weakAgainst: ['rock', 'steel'],
    noEffectWhileAttacking: ['ghost'],
    noEffectWhileDefending: ['ghost'],
    color: 'rgb(137,143,150)',
    vulnerableTo: [],
    defendsWellAgainst: [],
  },
  fighting: {
    name: 'fighting',
    strongAgainst: ['normal', 'ice', 'rock', 'dark', 'steel'],
    weakAgainst: ['poison', 'flying', 'psychic', 'bug', 'fairy'],
    noEffectWhileAttacking: ['ghost'],
    color: 'rgb(190,75,106)',
    vulnerableTo: ['flying', 'psychic', 'fairy'],
    defendsWellAgainst: ['bug', 'rock', 'dark'],
  },
  flying: {
    name: 'flying',
    strongAgainst: ['grass', 'fighting', 'bug'],
    weakAgainst: ['electric', 'rock', 'steel'],
    noEffectWhileDefending: ['ground'],
    color: 'rgb(147,168,217)',
    vulnerableTo: ['electric', 'ice', 'rock'],
    defendsWellAgainst: ['grass', 'fighting', 'bug'],
  },
  poison: {
    name: 'poison',
    strongAgainst: ['grass', 'fairy'],
    weakAgainst: ['poison', 'ground', 'rock', 'ghost'],
    noEffectWhileAttacking: ['steel'],
    color: 'rgb(162,111,195)',
    vulnerableTo: ['ground', 'psychic'],
    defendsWellAgainst: ['grass', 'fighting', 'poison', 'bug', 'fairy'],
  },
  ground: {
    name: 'ground',
    strongAgainst: ['fire', 'electric', 'poison', 'rock', 'steel'],
    weakAgainst: ['grass', 'bug'],
    noEffectWhileAttacking: ['flying'],
    noEffectWhileDefending: ['electric'],
    color: 'rgb(204,123,80)',
    vulnerableTo: ['water', 'grass', 'ice'],
    defendsWellAgainst: ['poison', 'rock'],
  },
  rock: {
    name: 'rock',
    strongAgainst: ['fire', 'ice', 'flying', 'bug'],
    weakAgainst: ['fighting', 'ground', 'steel'],
    color: 'rgb(196,183,144)',
    vulnerableTo: ['water', 'grass', 'fighting', 'ground', 'steel'],
    defendsWellAgainst: ['normal', 'fire', 'poison', 'flying'],
  },
  steel: {
    name: 'steel',
    strongAgainst: ['ice', 'rock', 'fairy'],
    weakAgainst: ['fire', 'water', 'electric', 'steel'],
    color: 'rgb(102,141,159)',
    noEffectWhileDefending: ['poison'],
    vulnerableTo: ['fire', 'fighting', 'ground'],
    defendsWellAgainst: ['normal', 'grass', 'ice', 'flying', 'psychic', 'bug', 'rock', 'dragon', 'steel', 'fairy'],
  },
  electric: {
    name: 'electric',
    strongAgainst: ['water', 'flying'],
    weakAgainst: ['electric', 'grass', 'dragon'],
    noEffectWhileDefending: ['ground'],
    color: 'rgb(239,210,90)',
    vulnerableTo: ['ground'],
    defendsWellAgainst: ['electric', 'flying', 'steel'],
  },
  ice: {
    name: 'ice',
    strongAgainst: ['grass', 'ground', 'flying', 'dragon'],
    weakAgainst: ['fire', 'water', 'ice', 'steel'],
    color: 'rgb(138,204,192)',
    vulnerableTo: ['fire', 'fighting', 'rock', 'steel'],
    defendsWellAgainst: ['ice'],
  },
  dragon: {
    name: 'dragon',
    strongAgainst: ['dragon'],
    weakAgainst: ['steel'],
    noEffectWhileAttacking: ['fairy'],
    color: 'rgb(45,109,190)',
    vulnerableTo: ['ground'],
    defendsWellAgainst: ['electric', 'flying', 'steel'],
  },
  dark: {
    name: 'dark',
    strongAgainst: ['psychic', 'ghost'],
    weakAgainst: ['fighting', 'dark', 'fairy'],
    color: 'rgb(89,83,101)',
    vulnerableTo: ['fighting', 'bug', 'fairy'],
    noEffectWhileDefending: ['psychic'],
    defendsWellAgainst: ['ghost', 'dark'],
  },
  bug: {
    name: 'bug',
    strongAgainst: ['grass', 'psychic', 'dark'],
    weakAgainst: ['fire', 'fighting', 'poison', 'flying', 'ghost', 'steel', 'fairy'],
    color: 'rgb(154,191,73)',
    vulnerableTo: ['fire', 'flying', 'rock'],
    defendsWellAgainst: ['grass', 'fighting', 'ground'],
  },
  ghost: {
    name: 'ghost',
    strongAgainst: ['ghost', 'psychic'],
    weakAgainst: ['dark'],
    noEffectWhileAttacking: ['normal'],
    noEffectWhileDefending: ['normal'],
    color: 'rgb(86,105,167)',
    vulnerableTo: ['ghost', 'dark'],
    defendsWellAgainst: ['poison', 'bug'],
  },
  psychic: {
    name: 'psychic',
    strongAgainst: ['fighting', 'poison'],
    weakAgainst: ['psychic', 'steel'],
    noEffectWhileAttacking: ['dark'],
    color: 'rgb(232,121,122)',
    vulnerableTo: ['bug', 'ghost', 'dark'],
    defendsWellAgainst: ['fighting', 'psychic'],
  },
  water: {
    name: 'water',
    strongAgainst: ['fire', 'ground', 'rock'],
    weakAgainst: ['water', 'grass', 'dragon'],
    color: 'rgb(92,143,207)',
    vulnerableTo: ['electric', 'grass'],
    defendsWellAgainst: ['fire', 'water', 'ice', 'steel'],
  },
  fire: {
    name: 'fire',
    strongAgainst: ['grass', 'ice', 'bug', 'steel'],
    weakAgainst: ['fire', 'water', 'rock', 'dragon'],
    color: 'rgb(242,160,98)',
    vulnerableTo: ['water', 'ground', 'rock'],
    defendsWellAgainst: ['fire', 'grass', 'ice', 'bug', 'steel', 'fairy'],
  },
  grass: {
    name: 'grass',
    strongAgainst: ['water', 'ground', 'rock'],
    weakAgainst: ['fire', 'grass', 'poison', 'flying', 'bug', 'dragon', 'steel'],
    color: 'rgb(121,184,102)',
    vulnerableTo: ['fire', 'ice', 'poison', 'flying', 'bug'],
    defendsWellAgainst: ['water', 'electric', 'grass', 'ground'],
  },
  fairy: {
    name: 'fairy',
    strongAgainst: ['fighting', 'dragon', 'dark'],
    weakAgainst: ['fire', 'poison', 'steel'],
    color: 'rgb(223,148,225)',
    vulnerableTo: ['poison', 'steel'],
    defendsWellAgainst: ['fighting', 'bug', 'dark'],
  },
}

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

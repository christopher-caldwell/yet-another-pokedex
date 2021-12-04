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

export interface PokemonType {
  name: PokemonTypeName
  color: string
  doubleDamageFrom: PokemonTypeName[]
  doubleDamageTo: PokemonTypeName[]
  noDamageFrom: PokemonTypeName[]
  noDamageTo: PokemonTypeName[]
  halfDamageTo: PokemonTypeName[]
  halfDamageFrom: PokemonTypeName[]
}

export const typeColorMap: Record<PokemonTypeName, string> = {
  normal: 'rgb(137,143,150)',
  fighting: 'rgb(190,75,106)',
  flying: 'rgb(147,168,217)',
  poison: 'rgb(162,111,195)',
  ground: 'rgb(204,123,80)',
  rock: 'rgb(196,183,144)',
  steel: 'rgb(102,141,159)',
  electric: 'rgb(239,210,90)',
  ice: 'rgb(138,204,192)',
  dragon: 'rgb(45,109,190)',
  dark: 'rgb(89,83,101)',
  bug: 'rgb(154,191,73)',
  ghost: 'rgb(86,105,167)',
  psychic: 'rgb(232,121,122)',
  water: 'rgb(92,143,207)',
  fire: 'rgb(242,160,98)',
  grass: 'rgb(121,184,102)',
  fairy: 'rgb(223,148,225)',
}

export type PokemonTypeMap = Record<PokemonTypeName, PokemonType>

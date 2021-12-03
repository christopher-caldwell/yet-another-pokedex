import PokedexPromise, { Type } from 'pokedex-promise-v2'

import { PokemonProgressBar } from './progressBar'

const Pokedex = new PokedexPromise()

const numTypes = 18
export const generateTypes = async () => {
  const types = {}
  for (let iterator = 1; iterator <= numTypes; iterator++) {
    const type = (await Pokedex.getTypeByName(iterator)) as unknown as Type
    types[type.name] = {
      name: type.name,
      color: typeColorMap[type.name],
      doubleDamageFrom: extractNameFromComplexArray(type.damage_relations.double_damage_from),
      doubleDamageTo: extractNameFromComplexArray(type.damage_relations.double_damage_to),
      noDamageFrom: extractNameFromComplexArray(type.damage_relations.no_damage_from),
      noDamageTo: extractNameFromComplexArray(type.damage_relations.no_damage_to),
      halfDamageTo: extractNameFromComplexArray(type.damage_relations.half_damage_to),
      halfDamageFrom: extractNameFromComplexArray(type.damage_relations.half_damage_from),
    }
    await waitForMs(1000)
    PokemonProgressBar.increment()
  }
  return types
}

export const extractNameFromComplexArray = <T extends { name: string }>(nameObjects: T[]): string[] => {
  return nameObjects.reduce<string[]>((total, nameObject) => [...total, nameObject.name], [])
}

export const waitForMs = (msToWait: number) => new Promise(resolve => setTimeout(resolve, msToWait))

export const typeColorMap: Record<string, string> = {
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

export * from './progressBar'

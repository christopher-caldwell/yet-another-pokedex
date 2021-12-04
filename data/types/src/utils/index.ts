import PokedexPromise, { Type } from 'pokedex-promise-v2'

import { PokemonTypeMap, typeColorMap } from '@/interfaces'
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
  return types as PokemonTypeMap
}

export const extractNameFromComplexArray = <T extends { name: string }>(nameObjects: T[]): string[] => {
  return nameObjects.reduce<string[]>((total, nameObject) => [...total, nameObject.name], [])
}

export const waitForMs = (msToWait: number) => new Promise(resolve => setTimeout(resolve, msToWait))

export * from './progressBar'

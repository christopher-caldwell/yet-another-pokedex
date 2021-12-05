import { PokemonTypeName } from '@/interfaces'
import { types } from '@/constants/typeColors'

export const findDuplicateTypes = (pokemonTypes: PokemonTypeName[]): PokemonTypeName[] => {
  const duplicateTypes: PokemonTypeName[] = []
  pokemonTypes.forEach((type, index) => {
    const potentialDuplicateIndex = pokemonTypes.indexOf(type)
    if (potentialDuplicateIndex !== index && potentialDuplicateIndex >= 0) {
      duplicateTypes.push(type)
    }
  })
  return duplicateTypes
}

export const getFightWithTypes = (pokemonTypes: PokemonTypeName[]) => {
  const fightWithTypes: PokemonTypeName[] = []
  pokemonTypes.forEach(type => {
    types[type].doubleDamageFrom.forEach(doubleDamageType => {
      fightWithTypes.push(doubleDamageType as PokemonTypeName)
    })
  })

  return fightWithTypes
}

export const getAvoidTypes = (pokemonTypes: PokemonTypeName[]) => {
  const avoidTypes: PokemonTypeName[] = []
  pokemonTypes.forEach(type => {
    types[type].halfDamageFrom.forEach(halfDamageType => {
      avoidTypes.push(halfDamageType as PokemonTypeName)
    })
  })
  return [...new Set(avoidTypes)]
}

export const getNoEffectTypes = (pokemonTypes: PokemonTypeName[]) => {
  const noEffectTypes: PokemonTypeName[] = []
  pokemonTypes.forEach(type => {
    types[type].noDamageFrom.forEach(noDamageFromType => {
      noEffectTypes.push(noDamageFromType as PokemonTypeName)
    })
  })
  return [...new Set(noEffectTypes)]
}

export const pruneFightWithTypes = (pokemonTypes: PokemonTypeName[]): PokemonTypeName[] => {
  const fightWithTypes = getFightWithTypes(pokemonTypes)
  const avoidTypes = getAvoidTypes(pokemonTypes)
  const noEffectTypes = getNoEffectTypes(pokemonTypes)
  const duplicateTypes = findDuplicateTypes(fightWithTypes)

  return fightWithTypes.filter(type => {
    return !(avoidTypes.includes(type) || noEffectTypes.includes(type) || duplicateTypes.includes(type))
  })
}

export const pruneAvoidTypes = (pokemonTypes: PokemonTypeName[]): PokemonTypeName[] => {
  const avoidTypes = getAvoidTypes(pokemonTypes)
  const fightWithTypes = getFightWithTypes(pokemonTypes)
  const noEffectTypes = getNoEffectTypes(pokemonTypes)

  avoidTypes.forEach((type, index) => {
    if (fightWithTypes.includes(type) || noEffectTypes.includes(type)) {
      avoidTypes.splice(index, 1)
    }
  })
  return avoidTypes
}

export const getMostEffectiveTypes = (pokemonTypes: PokemonTypeName[]): PokemonTypeName[] => {
  return findDuplicateTypes(getFightWithTypes(pokemonTypes))
}

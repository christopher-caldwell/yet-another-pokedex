import { Pokemon, PokemonTypeName } from '../../../shared-types/pokemon'
import { PokemonApiResponse } from '../types/'
import { types as pokemonTypes } from '../../../db/seed-data/types'

export const handleApiMappingToExpectedType = (response: PokemonApiResponse): Pokemon => {
  const { types, name, id } = response
  const thisPokemonsTypes = types.map(({ type: { name } }) => name)

  const resistantTo = constructTypesToArray(thisPokemonsTypes, 'defendsWellAgainst')
  const weaknesses = constructTypesToArray(thisPokemonsTypes, 'vulnerableTo')

  return {
    id,
    name: capitalize(name),
    types: thisPokemonsTypes,
    resistant: resistantTo,
    weaknesses,
  }
}

// vulnerableTo
export const constructTypesToArray = (
  givenPokemonTypes: PokemonTypeName[],
  keyNameForStaticTypes: 'vulnerableTo' | 'defendsWellAgainst'
): PokemonTypeName[] => {
  const resistantTo: PokemonTypeName[] = []
  givenPokemonTypes.forEach(type => {
    const correspondingType = pokemonTypes[type]
    correspondingType[keyNameForStaticTypes].forEach(defendsWellAgainst => {
      resistantTo.push(defendsWellAgainst)
    })
  })
  return [...new Set(resistantTo)]
}

export const capitalize = (lowerCasedWord: string): string => {
  const firstLetter = lowerCasedWord.substr(0, 1).toUpperCase()
  const restOfWord = lowerCasedWord.substr(1).toLowerCase()
  return firstLetter + restOfWord
}

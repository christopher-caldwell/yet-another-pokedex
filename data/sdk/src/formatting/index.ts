import { Pokemon as PokedexPokemon } from 'pokedex-promise-v2'
import capitalize from 'lodash.capitalize'

import { types as pokemonTypes, Pokemon, PokemonTypeName } from '../types'

export const handleApiMappingToExpectedType = (response: PokedexPokemon): Pokemon => {
  const { types, name, id } = response
  const thisPokemonsTypes = types.map(({ type: { name } }) => name) as PokemonTypeName[]

  const resistantTo = constructTypesToArray(thisPokemonsTypes, 'defendsWellAgainst')
  const weaknesses = constructTypesToArray(thisPokemonsTypes, 'vulnerableTo')

  return {
    id,
    name: capitalize(name),
    types: thisPokemonsTypes,
    resistant: resistantTo,
    weaknesses,
    imageUrl: `@/assets/official-artwork/${id}.png`,
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


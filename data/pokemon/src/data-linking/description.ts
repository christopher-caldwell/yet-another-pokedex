import { PokemonSpeciesFlavorTextEntry } from 'pokedex-promise-v2'

export const getDescriptionFromFlavors = (entries: PokemonSpeciesFlavorTextEntry[]) => {
  for (let iterator = entries.length - 1; iterator >= 0; iterator--) {
    if (entries[iterator].language.name === 'en') {
      return entries[iterator].flavor_text
    }
  }
  return ''
}

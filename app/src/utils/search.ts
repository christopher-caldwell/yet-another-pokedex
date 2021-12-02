import { Pokemon } from '@/interfaces'
import { pokemon } from '@/constants/pokemon'

export const getPokemonById = (id: number): Pokemon => {
  let targetPokemon: Pokemon | undefined
  for (let iterator = 0; iterator < pokemon.length; iterator++) {
    if (pokemon[iterator]?.id === id) {
      targetPokemon = pokemon[iterator]
      break
    }
  }
  if (!targetPokemon) throw new Error(`Could not find target Pokemon of ID ${id}`)
  return targetPokemon
}

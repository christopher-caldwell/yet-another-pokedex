import { Pokemon } from '@/interfaces'
import { pokemon } from '@/constants/pokemon'

export const searchForPokemon = (searchValue: string): Pokemon[] => {
  if (searchValue === '') return []
  const results = [...pokemon].filter(({ name }) => name.toLowerCase().includes(searchValue.toLowerCase()))
  return results
}

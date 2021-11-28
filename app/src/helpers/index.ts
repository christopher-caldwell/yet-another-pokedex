import Fuse from 'fuse.js'

import { Pokemon } from '@/interfaces'
import { pokemon } from '@/constants/pokemon'
import { handleFilterAndSort, SortDirection } from '@/utils'

const PokemonSearch = new Fuse(pokemon, { includeScore: true, keys: ['name', 'type', 'id'] })

export const searchForPokemon = (
  searchTerm: string,
  sortDirection?: SortDirection,
  sortKey?: 'name' | 'id'
): Pokemon[] => {
  return handleFilterAndSort({ baseList: pokemon, sortDirection, FuseSearch: PokemonSearch, searchTerm, sortKey })
}

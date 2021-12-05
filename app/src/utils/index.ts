import Fuse from 'fuse.js'
import arraySort from 'array-sort'

export const handleSearchResults = function <TData>(
  FuseSearch: Fuse<TData>,
  searchTerm: string,
  originalSet: TData[]
): TData[] {
  if (searchTerm === '') return originalSet
  const rawResults = FuseSearch.search(searchTerm)
  const results: TData[] = []
  for (const rawResult of rawResults) {
    const { item, score = 0 } = rawResult
    if (!item) continue
    if (score > 0.4) continue
    results.push(item)
  }
  return results
}

export enum SortDirection {
  Asc = 'asc',
  Desc = 'desc',
}
export interface HandleFilterAndSortArgs<TData> {
  baseList: TData[]
  sortDirection?: SortDirection | null
  FuseSearch: Fuse<TData>
  sortKey?: keyof TData | null
  searchTerm?: string | null
}
export const handleFilterAndSort = <TData>({ baseList, FuseSearch, searchTerm }: HandleFilterAndSortArgs<TData>) => {
  if (searchTerm) return handleSearchResults(FuseSearch, searchTerm, baseList)
  return baseList
}

export * from './search'

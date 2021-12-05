import React, { FC, useCallback, useMemo } from 'react'
import styled from 'styled-components/native'
import { FlatList, ListRenderItem, SafeAreaView } from 'react-native'
import { useDebounce } from '@caldwell619/react-hooks'

import { useInput } from '@/hooks/useInput'
import { searchForPokemon } from '@/features/pokemon/api'
import { Pokemon } from '@/interfaces'
import { themeView } from '@/constants/styles'
import { SearchBar } from '@/components'
import { ListPokemon } from './components/ListPokemon'

export const PokemonSearch: FC = () => {
  const [searchTerm, bindSearchTerm] = useInput('')
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  const results = useMemo(() => searchForPokemon(debouncedSearchTerm), [debouncedSearchTerm])
  const renderItem = useCallback<ListRenderItem<Pokemon>>(({ item }) => <ListPokemon {...item} />, [])

  return (
    <Container>
      <SearchContainer>
        <SearchBar platform='ios' placeholder='Search for a Pokemon' {...bindSearchTerm} />
      </SearchContainer>
      <FlatList<Pokemon> data={results} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
    </Container>
  )
}

const Container = styled(SafeAreaView)`
  ${themeView}
  min-height: 100%;
  width: 100%;
`

const SearchContainer = styled.View``

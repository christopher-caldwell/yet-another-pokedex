import React, { FC, useCallback } from 'react'
import styled from 'styled-components/native'
import { FlatList, ListRenderItem, SafeAreaView } from 'react-native'
import { SearchBar } from 'react-native-elements'

import { useInput } from '@/hooks/useInput'
import { searchForPokemon } from '@/features/pokemon/api'
import { Pokemon } from '@/interfaces'
import { themeView } from '@/constants/styles'
// import { SearchField } from '@/components'
import { ListPokemon } from './components/ListPokemon'

export const PokemonSearch: FC = () => {
  const [searchTerm, bindSearchTerm] = useInput('')
  const results = searchForPokemon(searchTerm)
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
  width: 100%;
`

const SearchContainer = styled.View`
  padding: 0 2%;
`

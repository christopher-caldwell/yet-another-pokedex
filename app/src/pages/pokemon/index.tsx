import React, { FC, useCallback } from 'react'
import styled from 'styled-components/native'
import { FlatList, ListRenderItem, SafeAreaView } from 'react-native'

import { useInput } from '@/hooks/useInput'
import { searchForPokemon } from '@/features/pokemon/api'
import { Pokemon } from '@/interfaces'
import ListPokemon from '@/features/pokemon/components/ListPokemon'
import { themeView } from '@/constants/styles'
import { SearchField } from '@/components'

const PokemonSearch: FC = () => {
  const [searchTerm, bindSearchTerm] = useInput('')
  const results = searchForPokemon(searchTerm)
  console.log('results', results.length)
  const renderItem = useCallback<ListRenderItem<Pokemon>>(({ item }) => <ListPokemon {...item} />, [])

  return (
    <Container>
      <SearchField placeholder='Search for a Pokémon' searchBind={bindSearchTerm} />
      <FlatList<Pokemon> data={results} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
    </Container>
  )
}

const Container = styled(SafeAreaView)`
  ${themeView}
  width: 100%;
`

export default PokemonSearch

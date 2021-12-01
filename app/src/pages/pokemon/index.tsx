import React, { FC, useCallback, useMemo, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components/native'
import { FlatList, ListRenderItem, SafeAreaView, Animated } from 'react-native'

import { useInput } from '@/hooks/useInput'
import { searchForPokemon } from '@/features/pokemon/api'
import { Pokemon } from '@/interfaces'
import ListPokemon from '@/features/pokemon/components/ListPokemon'
import { themeView } from '@/constants/styles'

const PokemonSearch: FC = () => {
  const { secondaryTextColor } = useContext(ThemeContext)
  const [searchTerm, bindSearchTerm] = useInput('')
  const results = useMemo(() => searchForPokemon(searchTerm), [searchTerm])

  const renderItem = useCallback<ListRenderItem<Pokemon>>(({ item }) => <ListPokemon {...item} />, [])

  return (
    <Container>
      <SearchFieldContainer>
        <SearchField
          placeholderTextColor={secondaryTextColor}
          placeholder={'Search for a Pokémon'}
          {...bindSearchTerm}
        />
      </SearchFieldContainer>
      <FlatList<Pokemon> data={results} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
    </Container>
  )
}

const Container = styled(SafeAreaView)`
  ${themeView}
  width: 100%;
`

const SearchFieldContainer = styled(Animated.View)`
  height: 100%;
`

const SearchField = styled.TextInput`
  padding: 2%;
  color: ${({ theme }) => theme.primaryTextColor};
`

export default PokemonSearch

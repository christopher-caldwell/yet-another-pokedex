import React, { FC, useCallback, useMemo, useContext, useEffect } from 'react'
import styled, { ThemeContext } from 'styled-components/native'
import { FlatList, ListRenderItem, SafeAreaView, Animated } from 'react-native'

import { useInput } from '@/hooks/useInput'
import { searchForPokemon } from '@/features/pokemon/api'
import { Pokemon } from '@/interfaces'
import ListPokemon from '@/features/pokemon/components/ListPokemon'
import { themeView } from '@/constants/styles'

const startPosition = new Animated.ValueXY({ x: 0, y: 0 })
const PokemonSearch: FC = () => {
  const { secondaryTextColor } = useContext(ThemeContext)
  const [searchTerm, bindSearchTerm] = useInput('')
  const results = useMemo(() => searchForPokemon(searchTerm), [searchTerm])
  useEffect(() => {
    if (searchTerm !== '') {
      Animated.spring(startPosition, {
        toValue: { x: 0, y: -300 },
        useNativeDriver: false,
      }).start()
    } else {
      Animated.spring(startPosition, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start()
    }
  }, [searchTerm])

  const renderItem = useCallback<ListRenderItem<Pokemon>>(({ item }) => <ListPokemon {...item} />, [])

  console.log('results', results)
  return (
    <Container>
      <SearchFieldContainer style={startPosition.getLayout()}>
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
  height: 100%;
  padding: 2%;
  color: ${({ theme }) => theme.primaryTextColor};
`

export default PokemonSearch

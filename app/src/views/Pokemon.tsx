import React, { FC } from 'react'
import styled from 'styled-components/native'

import { useInput } from '@/hooks/useInput'

const Pokemon: FC = () => {
  const [searchTerm, bindSearchTerm] = useInput('')
  console.log('search term', searchTerm)
  return (
    <Container>
      <SearchFieldContainer>
        <SearchField {...bindSearchTerm} />
      </SearchFieldContainer>
    </Container>
  )
}

const Container = styled.View`
  height: 100%;
  width: 100%;
`

const SearchFieldContainer = styled.View`
  height: 20%;
  width: 80%;
`

const SearchField = styled.TextInput`
  height: 100%;
  width: 100%;
`

export default Pokemon

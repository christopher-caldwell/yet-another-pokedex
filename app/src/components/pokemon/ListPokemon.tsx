import React, { FC } from 'react'
import styled from 'styled-components/native'

import { Pokemon } from '@/interfaces'

const ListPokemon: FC<Props> = ({ name }) => {
  return (
    <Container>
      <NameContainer>{name}</NameContainer>
    </Container>
  )
}

interface Props extends Pokemon {}

const Container = styled.View`
  margin-bottom: 2%;
  border: 1px solid gray;
  padding: 5% 1%;
  background-color: red;
`
const NameContainer = styled.Text``

export default ListPokemon

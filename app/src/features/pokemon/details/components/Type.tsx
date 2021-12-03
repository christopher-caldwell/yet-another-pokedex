import React, { FC } from 'react'
import styled from 'styled-components/native'
import capitalize from 'lodash.capitalize'

import { types } from '@/constants'
import { PokemonTypeName } from '@/interfaces'

export const TypePill: FC<Props> = ({ type, hasMargin = true }) => {
  const color = getColorFromType(type)
  return (
    <Container pillColor={color} hasMargin={hasMargin}>
      <Label>{capitalize(type)}</Label>
    </Container>
  )
}

const getColorFromType = (type: PokemonTypeName) => {
  return types[type].color
}

const Label = styled.Text`
  color: white;
`
const Container = styled.View<{ pillColor: string; hasMargin: boolean }>`
  background-color: ${({ pillColor }) => pillColor};
  padding: 7px 15px;
  border-radius: 10px;
  margin: 0;
  margin: ${({ hasMargin }) => (hasMargin ? ' 5px 10px' : '0')};
`

interface Props {
  type: PokemonTypeName
  hasMargin?: boolean
}

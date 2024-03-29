import React, { FC } from 'react'
import styled from 'styled-components/native'

import { themeView } from '@/constants/styles'

export const PokemonImage: FC<Props> = ({ url }) => {
  return (
    <Container>
      <Image
        //@ts-ignore
        source={url}
      />
    </Container>
  )
}

const Container = styled.View`
  ${themeView}
  height: 200px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`
const Image = styled.Image`
  height: 150px;
  width: 150px;
`

interface Props {
  url: string
}

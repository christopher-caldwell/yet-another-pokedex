import React, { FC } from 'react'
import styled from 'styled-components/native'

import { themeText } from '@/constants/styles'

export const Description: FC<Props> = ({ description }) => {
  return (
    <Container>
      <Text>{description}</Text>
    </Container>
  )
}

const Container = styled.View`
  background-color: ${({ theme: { secondaryBackgroundColor } }) => secondaryBackgroundColor};
  justify-content: center;
  flex-direction: row;
  padding: 3%;
`
const Text = styled.Text`
  ${themeText}
  line-height: 20px;
`

interface Props {
  description: string
}

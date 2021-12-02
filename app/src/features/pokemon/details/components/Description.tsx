import React, { FC } from 'react'
import styled from 'styled-components/native'

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
  line-height: 20;
`

interface Props {
  description: string
}

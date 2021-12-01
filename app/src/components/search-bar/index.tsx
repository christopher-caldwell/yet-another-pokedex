import React, { FC, useState } from 'react'
import { Keyboard } from 'react-native'
import styled from 'styled-components/native'

import { BindValue } from '@/hooks'

export const SearchField: FC<Props> = ({ placeholder, searchBind }) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
    console.log('focus')
  }

  const handleBlur = () => {
    console.log('blur')
    Keyboard.dismiss()
    setIsFocused(false)
  }

  return (
    <Container>
      <Input
        onFocus={handleFocus}
        onBlur={handleBlur}
        isFocused={isFocused}
        placeholder={placeholder}
        {...searchBind}
      />
      <CancelButton title='Cancel' isFocused={isFocused} onPress={handleBlur} />
    </Container>
  )
}

interface Props {
  placeholder: string
  searchBind: BindValue
}

const Container = styled.View`
  display: flex;
  flex-direction: row;
  transition: all 0.2s;
`

const Input = styled.TextInput<{ isFocused: boolean }>`
  width: ${({ isFocused }) => (isFocused ? '80%' : '100%')};
  padding: 2%;
  color: ${({ theme }) => theme.primaryTextColor};
  border: 1px solid ${({ theme: { primaryTextColor } }) => primaryTextColor};
  border-radius: 10px;
`

const CancelButton = styled.Button<{ isFocused: boolean }>`
  width: ${({ isFocused }) => (isFocused ? '20%' : 0)};
`

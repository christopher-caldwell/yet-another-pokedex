import React, { FC } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

import { Pokemon } from '@/interfaces'

export const ListPokemon: FC<Props> = ({ name, id, imageUrl }) => {
  const navigation = useNavigation()
  return (
    <TouchableWithoutFeedback
      //@ts-ignore
      onPress={() => navigation.navigate('Pokedex', { screen: 'PokemonDetails', params: { id } })}
    >
      <Container>
        <InfoContainer>
          <Image
            //@ts-ignore
            source={imageUrl}
          />
          <Name>{name}</Name>
        </InfoContainer>
        <NumberContainer>No. {id.toString()}</NumberContainer>
      </Container>
    </TouchableWithoutFeedback>
  )
}

interface Props extends Pokemon {}

const NumberContainer = styled.Text`
  color: ${({ theme: { primaryTextColor } }) => primaryTextColor};
`
const Container = styled.View`
  border: 0.5px solid #e6e6e6;
  padding: 4%;
  background-color: ${({ theme: { secondaryBackgroundColor } }) => secondaryBackgroundColor};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`
const Name = styled.Text`
  color: ${({ theme: { primaryTextColor } }) => primaryTextColor};
`
const Image = styled.Image`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`

import React, { FC, useState } from 'react'
import styled from 'styled-components/native'
import { Button, Text } from 'react-native-elements'
import capitalize from 'lodash.capitalize'

import { types } from '@/constants'
import { TypePill } from '@/features/pokemon/details/components/Type'
import { useBottomSheet } from '@/hooks'
import { themeView } from '@/constants/styles'
import { getMostEffectiveTypes, getNoEffectTypes, pruneFightWithTypes } from '@/features/type-tool/api'
import { PokemonType, PokemonTypeName } from '@/interfaces'

/** Shows which type to use against another type. For example, if your opponent is water, and you know that already, this view shows which moves to use against water */
const TypeTool: FC = () => {
  const [type1, setType1] = useState<PokemonType | undefined>()
  const [type2, setType2] = useState<PokemonType | undefined>()
  const [editTarget, setEditTarget] = useState<1 | 2 | undefined>()
  const { Sheet, openSheet, closeSheet } = useBottomSheet()
  const chosenTypes = [type1?.name, type2?.name].filter(type => !!type) as unknown as PokemonTypeName[]

  const mostEffectiveTypes = getMostEffectiveTypes(chosenTypes)
  const superEffectiveTypes = pruneFightWithTypes(chosenTypes)
  const avoidTypes = pruneFightWithTypes(chosenTypes)
  const noEffectTypes = getNoEffectTypes(chosenTypes)

  const handleOpenSheet = (incomingEditTarget: 1 | 2): void => {
    setEditTarget(incomingEditTarget)
    openSheet()
  }

  const handleTypeEdit = (type: PokemonType | undefined) => {
    if (editTarget === 1) setType1(type)
    if (editTarget === 2) setType2(type)
    setEditTarget(undefined)
    closeSheet()
  }

  return (
    <>
      <Root>
        <Container>
          <Text h4>Opposing Pokemon's types</Text>
          <TypeDisplayContainer>
            {type1 ? (
              <TypeDisplayText textColor={type1.color} onPress={() => handleOpenSheet(1)} h3>
                {capitalize(type1.name)}
              </TypeDisplayText>
            ) : (
              <Button type='clear' title='Choose type 1' onPress={() => handleOpenSheet(1)} />
            )}
            {type2 ? (
              <TypeDisplayText textColor={type2.color} onPress={() => handleOpenSheet(2)} h3>
                {capitalize(type2.name)}
              </TypeDisplayText>
            ) : (
              <Button type='clear' title='Choose type 2' onPress={() => handleOpenSheet(2)} />
            )}
          </TypeDisplayContainer>
          <Text h4>Most Effective ( 400% damage )</Text>
          {mostEffectiveTypes.map(type => (
            <TypePillContainer key={type}>
              <TypePill type={type} />
            </TypePillContainer>
          ))}
          <Text h4>Super Effective ( 200% damage )</Text>
          {superEffectiveTypes.map(type => (
            <TypePillContainer key={type}>
              <TypePill type={type} />
            </TypePillContainer>
          ))}
          <Text h4>Not Very Effective ( 50% damage )</Text>
          {avoidTypes.map(type => (
            <TypePillContainer key={type}>
              <TypePill type={type} />
            </TypePillContainer>
          ))}
          <Text h4>No Effect ( 0% damage )</Text>
          {noEffectTypes.map(type => (
            <TypePillContainer key={type}>
              <TypePill type={type} />
            </TypePillContainer>
          ))}
        </Container>
      </Root>
      <Sheet>
        <TypeSelectionContainer>
          <Text h1>Choose a Type</Text>
          {Object.values(types).map(type =>
            type.name === type1?.name || type.name === type2?.name ? null : (
              <TypePillContainer key={type.name} onPress={() => handleTypeEdit(type)}>
                <TypePill type={type.name} />
              </TypePillContainer>
            )
          )}
          <ClearButtonContainer>
            <Button
              type='clear'
              titleStyle={{ color: '#fc3434' }}
              title='Clear Type'
              onPress={() => handleTypeEdit(undefined)}
            />
          </ClearButtonContainer>
        </TypeSelectionContainer>
      </Sheet>
    </>
  )
}

const TypeDisplayText = styled(Text)<{ textColor?: string }>`
  color: ${({ textColor, theme: { primaryTextColor } }) => textColor || primaryTextColor};
`

const TypeDisplayContainer = styled.View`
  margin-top: 15%;
  flex-direction: row;
  justify-content: space-between;
`

const TypeSelectionContainer = styled.View`
  ${themeView}
  background-color: ${({ theme: { secondaryBackgroundColor } }) => secondaryBackgroundColor};
  padding: 5%;
  flex-wrap: wrap;
  flex-direction: row;
  min-height: 100%;
`
const TypePillContainer = styled.TouchableOpacity`
  width: 50%;
  padding: 3% 0;
`
const Root = styled.SafeAreaView`
  ${themeView}
`
const Container = styled.View`
  ${themeView}
  min-height: 100%;
  padding: 5%;
`
const ClearButtonContainer = styled.View`
  width: 100%;
  justify-content: center;
  flex-direction: row;
  margin-top: 5%;
`

export default TypeTool

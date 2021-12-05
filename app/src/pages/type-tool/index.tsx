import React, { FC, useState } from 'react'
import styled from 'styled-components/native'
import { Button, Text } from 'react-native-elements'
import capitalize from 'lodash.capitalize'

import { types } from '@/constants'
import { TypePill } from '@/features/pokemon/details/components/Type'
import { useBottomSheet } from '@/hooks'
import { themeView } from '@/constants/styles'
import { getMostEffectiveTypes, getNoEffectTypes, pruneAvoidTypes, pruneFightWithTypes } from '@/features/type-tool/api'
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
  const avoidTypes = pruneAvoidTypes(chosenTypes)
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
          <EffectDisplay leftLabel='Most Effective' rightLabel='( 400% damage )' targetTypes={mostEffectiveTypes} />
          <EffectDisplay leftLabel='Super Effective' rightLabel='( 200% damage )' targetTypes={superEffectiveTypes} />
          <EffectDisplay leftLabel='Not Very Effective' rightLabel='( 50% damage )' targetTypes={avoidTypes} />
          <EffectDisplay leftLabel='No Effect' rightLabel='( 0% damage )' targetTypes={noEffectTypes} />
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
              disabled={!type1 && !type2}
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

const EffectDisplayTitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
const EffectDisplay: FC<{ targetTypes: PokemonTypeName[]; leftLabel: string; rightLabel: string }> = ({
  leftLabel,
  rightLabel,
  targetTypes,
}) => {
  if (!targetTypes.length) return null
  return (
    <>
      <EffectDisplayTitleContainer>
        <Text h4>{leftLabel}</Text>
        <Text h4>{rightLabel}</Text>
      </EffectDisplayTitleContainer>
      <EffectDisplayTypeContainer>
        {targetTypes.map(type => (
          <TypePillContainer key={type}>
            <TypePill type={type} />
          </TypePillContainer>
        ))}
      </EffectDisplayTypeContainer>
    </>
  )
}

const EffectDisplayTypeContainer = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 10%;
`

const TypeDisplayText = styled(Text)<{ textColor?: string }>`
  color: ${({ textColor, theme: { primaryTextColor } }) => textColor || primaryTextColor};
`

const TypeDisplayContainer = styled.View`
  margin-top: 15%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20%;
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
const Container = styled.ScrollView`
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

import React, { FC } from 'react'
import { ScrollView } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { getPokemonById } from '@/utils'
import { DisplayTable } from '@/components'
import { PokemonImage, Description, TypePill } from './components'
import { PokemonTypeName } from '@/interfaces'

export const PokemonDetails: FC = () => {
  //TODO: Bad set state in here somewhere, likely need to get navigation as a prop
  const route = useRoute()
  const navigation = useNavigation<NativeStackNavigationProp<{}>>()
  //@ts-ignore
  const pokemon = getPokemonById(route.params?.id || -1)
  navigation.setOptions({ title: pokemon.name })

  return (
    <ScrollView>
      <PokemonImage url={pokemon.imageUrl} />
      <Description description={pokemon.description} />
      <DisplayTable
        title='Types'
        rows={[
          {
            label: 'This Pokemon',
            value: (
              <>
                {pokemon.types.map(type => (
                  <TypePill key={type} type={type} />
                ))}
              </>
            ),
          },
          // TODO: Fix to be no render if length 0
          {
            label: 'Most Effective',
            value: <TypesPills types={pokemon.mostEffectiveTypes} />,
          },
          {
            label: 'Fight With',
            value: <TypesPills types={pokemon.superEffectiveTypes} />,
          },
          {
            label: 'Avoid Using',
            value: <TypesPills types={pokemon.notVeryEffectiveTypes} />,
          },
          {
            label: 'No Effect',
            value: <TypesPills types={pokemon.noEffectTypes} />,
          },
        ]}
      />
    </ScrollView>
  )
}

const TypesPills: FC<{ types: PokemonTypeName[] }> = ({ types }) => (
  <>
    {types.map(type => (
      <TypePill key={type} type={type} />
    ))}
  </>
)

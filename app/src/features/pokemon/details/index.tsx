import React, { FC } from 'react'
import { View } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { getPokemonById } from '@/utils'
import { PokemonImage, Description } from './components'

export const PokemonDetails: FC = () => {
  const route = useRoute()
  const navigation = useNavigation<NativeStackNavigationProp<{}>>()
  //@ts-ignore
  const pokemon = getPokemonById(route.params?.id || -1)
  navigation.setOptions({ title: pokemon.name })

  return (
    <View>
      <PokemonImage url={pokemon.imageUrl} />
      <Description description="Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns it's firey breath on any opponent weaker than itself" />
    </View>
  )
}

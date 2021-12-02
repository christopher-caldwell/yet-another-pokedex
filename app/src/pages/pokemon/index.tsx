import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { PokemonSearch, PokemonDetails } from '@/features/pokemon'

const Stack = createNativeStackNavigator()
const PokemonStackNavigator = () => {
  return (
    <Stack.Navigator>
      {/* TODO: Routing Enums */}
      <Stack.Screen name='Pokemon' component={PokemonSearch} />
      <Stack.Screen name='PokemonDetails' component={PokemonDetails} />
    </Stack.Navigator>
  )
}

export default PokemonStackNavigator

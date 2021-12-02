import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Pokemon from '@/pages/pokemon'
import TypeMap from '@/pages/type-map'

const Tab = createBottomTabNavigator()
const Router: FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name='Pokedex' component={Pokemon} />
      <Tab.Screen name='Type Planner' component={TypeMap} />
    </Tab.Navigator>
  )
}

export default Router

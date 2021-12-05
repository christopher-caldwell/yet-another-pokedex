import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Pokemon from '@/pages/pokemon'
import TypeTool from '@/pages/type-tool'

const Tab = createBottomTabNavigator()
const Router: FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name='Pokedex'
        component={Pokemon}
        options={{ tabBarIcon: ({ color }) => <MaterialCommunityIcons name='pokeball' size={26} color={color} /> }}
      />
      <Tab.Screen
        name='Type Tool'
        component={TypeTool}
        options={{ tabBarIcon: ({ color }) => <MaterialCommunityIcons name='battlenet' size={26} color={color} /> }}
      />
    </Tab.Navigator>
  )
}

export default Router

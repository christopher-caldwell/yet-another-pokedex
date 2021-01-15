import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Pokemon from '@/views/Pokemon'
import Profile from '@/views/Profile'

const Tab = createBottomTabNavigator()
const Router: FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Pokemon' component={Pokemon} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  )
}

export default Router

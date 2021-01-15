import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Router from '@/router'

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        <Router />
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App

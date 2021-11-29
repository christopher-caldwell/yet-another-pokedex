import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Appearance } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

import Router from '@/router'
import { themeMap } from '@/constants/themes'

const App = () => {
  const colorScheme = Appearance.getColorScheme()
  const theme = themeMap?.[colorScheme || 'dark']

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App

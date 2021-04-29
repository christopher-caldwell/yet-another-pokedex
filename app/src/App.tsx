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
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App

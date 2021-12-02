import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Appearance } from 'react-native'
import { ThemeProvider as StyledComponentsProvider } from 'styled-components/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider as NativeThemeProvider } from 'react-native-elements'

import Router from '@/router'
import { themeMap } from '@/constants/themes'

const App = () => {
  const colorScheme = Appearance.getColorScheme()
  const theme = themeMap?.[colorScheme || 'dark']

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NativeThemeProvider useDark={colorScheme === 'dark'}>
          <StyledComponentsProvider theme={theme}>
            <Router />
          </StyledComponentsProvider>
        </NativeThemeProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App

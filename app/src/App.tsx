import React from 'react'
import { NavigationContainer, Theme as NavTheme } from '@react-navigation/native'
import { Appearance } from 'react-native'
import { ThemeProvider as StyledComponentsProvider } from 'styled-components/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider as NativeThemeProvider } from 'react-native-elements'
import { PortalProvider } from '@gorhom/portal'

import Router from '@/router'
import { themeMap } from '@/constants/themes'

const App = () => {
  const colorScheme = Appearance.getColorScheme()
  const theme = themeMap?.[colorScheme || 'dark']

  const navTheme: NavTheme = {
    dark: colorScheme === 'dark',
    colors: {
      background: theme.primaryTextColor,
      primary: theme.primaryTextColor,
      text: theme.primaryTextColor,
      card: theme.secondaryBackgroundColor,
      border: theme.primaryTextColor,
      notification: 'red',
    },
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navTheme}>
        <NativeThemeProvider useDark={colorScheme === 'dark'}>
          <StyledComponentsProvider theme={theme}>
            <PortalProvider>
              <Router />
            </PortalProvider>
          </StyledComponentsProvider>
        </NativeThemeProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App

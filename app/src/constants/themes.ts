import { DefaultTheme } from 'styled-components/native'

import { Theme } from '@/interfaces/index'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const darkTheme: DefaultTheme = {
  mode: 'dark',
  primaryBackgroundColor: '#353c51',
  primaryTextColor: '#cfd5e8',
  secondaryTextColor: 'white',
  primaryButtonColor: '#152642',
  secondaryButtonColor: '#506680',
}
export const lightTheme: DefaultTheme = {
  mode: 'light',
  primaryBackgroundColor: '#ffefd5',
  primaryTextColor: '#DB7093',
  secondaryTextColor: '#333333',
  primaryButtonColor: '#b9d6f3',
  secondaryButtonColor: '#a1c9f1',
}

export const themeMap: Record<string, Theme> = {
  light: lightTheme,
  dark: darkTheme,
}

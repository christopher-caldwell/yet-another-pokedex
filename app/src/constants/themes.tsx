import { DefaultTheme } from 'styled-components/native'

import { Theme } from '@/interfaces/index'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const darkTheme: DefaultTheme = {
  mode: 'dark',
  brandColor: '#4d6cf5',
  primaryBackgroundColor: '#080808',
  primaryTextColor: '#f2f2f2',
  secondaryTextColor: 'white',
  secondaryBackgroundColor: '#393e42',
  primaryButtonColor: '#152642',
  secondaryButtonColor: '#506680',
}
export const lightTheme: DefaultTheme = {
  mode: 'light',
  brandColor: '#4d6cf5',
  primaryBackgroundColor: '#f7f7f7',
  primaryTextColor: '#DB7093',
  secondaryTextColor: '#333333',
  secondaryBackgroundColor: '#ffffff',
  primaryButtonColor: '#b9d6f3',
  secondaryButtonColor: '#a1c9f1',
}

export const themeMap: Record<string, Theme> = {
  light: lightTheme,
  dark: darkTheme,
}

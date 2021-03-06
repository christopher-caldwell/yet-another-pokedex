import { ColorSchemeName } from 'react-native'

export * from '../../../shared-types/pokemon'

export interface Theme {
  mode: ColorSchemeName
  primaryBackgroundColor: string
  primaryTextColor: string
  secondaryTextColor: string
  primaryButtonColor: string
  secondaryButtonColor: string
}

import { ColorSchemeName } from 'react-native'

export * from '../../../shared-types/pokemon'

export interface Theme {
  mode: ColorSchemeName
  brandColor: string
  primaryBackgroundColor: string
  primaryTextColor: string
  secondaryBackgroundColor: string
  secondaryTextColor: string
  primaryButtonColor: string
  secondaryButtonColor: string
}

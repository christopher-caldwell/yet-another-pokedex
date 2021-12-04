import { ColorSchemeName } from 'react-native'

export * from '../../../data/pokemon/src/interfaces'
export * from '../../../data/types/src/interfaces'

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

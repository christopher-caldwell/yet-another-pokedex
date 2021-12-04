import capitalize from 'lodash.capitalize'

export * from './evolution'
export * from './types'
export * from './description'

export const formatName = (name: string): string => {
  const [displayName, ...descriptions] = name.split('-')
  const capitalizedDescriptions = descriptions.reduce<string>((total, current) => total + capitalize(current) + ' ', '')
  return `${capitalize(displayName)}${capitalizedDescriptions ? ` ( ${capitalizedDescriptions.trim()} )` : ''}`
}

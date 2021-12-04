import { css } from 'styled-components/native'

export const themeView = css`
  background-color: ${({ theme }) => theme.primaryBackgroundColor};
  color: ${({ theme }) => theme.primaryTextColor};
`
export const themeText = css`
  color: ${({ theme }) => theme.primaryTextColor};
`

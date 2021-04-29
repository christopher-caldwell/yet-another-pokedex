import styled from 'styled-components/native'

interface FlexContainerProps {
  height?: string
  width?: string
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-evenly'
  align?: 'center' | 'flex-start' | 'flex-end' | 'baseline'
}
export const FlexContainer = styled.View<FlexContainerProps>`
  display: flex;
  justify-content: ${({ justify = 'center' }) => justify};
  align-items: ${({ align = 'center' }) => align};
  ${({ width }) => (width ? `width: ${width};` : '')}
  ${({ height }) => (height ? `height: ${height};` : '')}
`

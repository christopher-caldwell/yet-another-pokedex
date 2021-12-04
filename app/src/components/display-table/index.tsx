import { themeText, themeView } from '@/constants/styles'
import React, { FC } from 'react'
import styled from 'styled-components/native'

export const DisplayTable: FC<Props> = ({ title, rows, valueMaxWidth = 70 }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <TableContainer>
        {rows.map(row => (
          <RowContainer key={row.label}>
            <Label>{row.label}</Label>
            <TypesContainer valueMaxWidth={valueMaxWidth}>{row.value}</TypesContainer>
          </RowContainer>
        ))}
      </TableContainer>
    </Container>
  )
}

const Container = styled.View`
  ${themeView}
`
const Title = styled.Text`
  font-size: 18px;
  padding-left: 15px;
  margin: 15px 0;
  color: ${({ theme: { brandColor } }) => brandColor};
`
const TableContainer = styled.View`
  background-color: ${({ theme: { secondaryBackgroundColor } }) => secondaryBackgroundColor};
`
const RowContainer = styled.View`
  flex-direction: row;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
  border: 0.5px solid #0000001c;
`
const Label = styled.Text`
  ${themeText}
`
const TypesContainer = styled.View<{ valueMaxWidth: number }>`
  flex-direction: row;
  justify-content: flex-end;
  max-width: ${({ valueMaxWidth }) => valueMaxWidth}%;
  flex-wrap: wrap;
`

interface Props {
  title: string
  rows: DisplayTuple[]
  valueMaxWidth?: number
}

interface DisplayTuple {
  label: string
  shouldHighlight?: boolean
  value: JSX.Element
}

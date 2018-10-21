import styled from 'styled-components'
import theme from '../themes/DefaultTheme'

export const Table = styled.table`
  border: 1px solid ${props => props.theme.color.grey};
  border-collapse: collapse;
  color: ${props => props.color || props.theme.typography.fontColor};
  font-family: ${props => props.fontFamily || props.theme.typography.fontFamily};
`

export const TableHeader = styled.thead`
  font-family: ${props => props.fontFamily || props.theme.typography.fontFamily};
  color: ${props => props.color || props.theme.typography.fontColor};
`

export const TableBody = styled.tbody`
  font-family: ${props => props.fontFamily || props.theme.typography.fontFamily};
  color: ${props => props.color || props.theme.typography.fontColor};
`

export const TableFooter = styled.tfoot`
  font-family: ${props => props.fontFamily || props.theme.typography.fontFamily};
  color: ${props => props.color || props.theme.typography.fontColor};
`

export const TableRow = styled.tr`
  font-family: ${props => props.fontFamily || props.theme.typography.fontFamily};
`
export const TableHeading = styled.th`
  border: 1px solid ${props => props.theme.color.grey};
  font-family: ${props => props.fontFamily || props.theme.typography.fontFamily};
  padding: 0.5rem;
`

export const TableCell = styled.td`
  border: 1px solid ${props => props.theme.color.grey};
  font-family: ${props => props.fontFamily || props.theme.typography.fontFamily};
  padding: 0.5rem;
`

Table.defaultProps = { theme }
TableHeader.defaultProps = { theme }
TableBody.defaultProps = { theme }
TableFooter.defaultProps = { theme }
TableRow.defaultProps = { theme }
TableHeading.defaultProps = { theme }
TableCell.defaultProps = { theme }

Table.Header = TableHeader
Table.Body = TableBody
Table.Footer = TableFooter
Table.Row = TableRow
Table.Heading = TableHeading
Table.Cell = TableCell

export default Table

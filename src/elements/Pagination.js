import styled from 'styled-components'
import theme from '../themes/DefaultTheme'

/**
 * Pagination component.
 */
export const Pagination = styled.ul`
  border-radius: 0.25rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  font-family: ${props => props.theme.typography.fontFamily};
  list-style: none;
  margin: 0;
  padding-left: 0;
  text-decoration: none;
  width: auto;
`

/**
 * Item inside Pagination.
 */
export const PaginationItem = styled.li`
  border: 1px solid ${props => props.theme.blue};
  box-sizing: border-box;
  display: block;
  margin-left: -1px;
  padding: 0.5rem 0.75rem;
  position: relative;
  &:first-child {
    margin-left: 0;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  &:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
`

Pagination.defaultProps = { theme }
PaginationItem.defaultProps = { theme }

Pagination.Item = PaginationItem

export default Pagination

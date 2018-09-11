import styled from 'styled-components'
import DefaultTheme from '../themes/DefaultTheme'

/**
 * A Column of the Grid.
 */
const Column = styled.div`
  display: inline-block;
  font-family: ${props => props.theme.fontFamily};
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  vertical-align: top;
  width: ${({ width }) => width};
`

/**
 * Container component for the Grid.
 */
export const Grid = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  padding: 0em;

  // Calculate width for contained columns.
  ${Column} {
    width: ${({ columns }) => (columns ? 100 / columns + '%' : '6.25%')};
  }
`
Column.defaultProps = { theme: DefaultTheme }

Grid.Column = Column

export default Grid

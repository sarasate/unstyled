import styled from 'styled-components'
import DefaultTheme from '../themes/DefaultTheme'

/**
 * A Badge displays a highlighted number.
 * TODO add chroma.js lib to get inverted colors
 */
export const Badge = styled.span`
  background-color: ${({ theme }) => theme.secondaryColor};
  border: none;
  border-radius: 0.125em;
  color: ${props =>
    props.color ? props.color : props.theme.typography.primaryColor};
  display: inline-block;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 1em;
  font-style: normal;
  font-weight: bold;
  line-height: 1em;
  margin: 0em 0.125em;
  min-height: 1em;
  padding: 0.5833em 0.833em;
  text-align: center;
  text-decoration: none;
  vertical-align: baseline;
`

// Default Theme
Badge.defaultProps = { theme: DefaultTheme }

export default Badge

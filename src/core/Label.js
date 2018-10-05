import styled from 'styled-components'
import DefaultTheme from '../themes/DefaultTheme'

/**
 * A Basic Label representing a HTML form label.
 * TODO refactor Label as Form.Label and use this as general label component
 */
const Label = styled.span`
  background-color: ${props =>
    props.color ? props.color : props.theme.secondaryColor};
  border: none;
  border-radius: 0.125em;
  // TODO solve color/bgColor diff with chroma.js or similar
  color: ${props => (props.color ? 'white' : props.theme.primaryColor)};
  display: inline-block;
  font-family: ${props => props.theme.fontFamily};
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
Label.defaultProps = { theme: DefaultTheme }

export default Label

import styled from 'styled-components'
import DefaultTheme from '../themes/DefaultTheme'

const chroma = require('chroma-js')

/**
 * A Basic Label representing a HTML form label.
 * TODO refactor Label as Form.Label and use this as general label component
 */
export const Label = styled.span`
  background-color: ${props =>
    props.color ? props.theme.color[props.color] : 'inherit'};
  border: none;
  border-radius: 0.125em;
  // Use white font color if contrast between background and standard color i not below 7
  color: ${props =>
    chroma.contrast(
      props.theme.color[props.color] || 'white',
      props.theme.typography.fontColor
    ) > 7
      ? props.theme.typography.fontColor
      : 'white'};
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

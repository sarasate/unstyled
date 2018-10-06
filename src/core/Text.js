import styled from 'styled-components'
import DefaultTheme from '../themes/DefaultTheme'

/**
 * Text element
 * HTML: `p`
 * @type {StyledComponentClass<JSX.IntrinsicElements["p"], any, JSX.IntrinsicElements["p"]>}
 */
const Text = styled.p`
  color: ${props => props.color || props.theme.fontColor};
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize};
  line-height: 1.5rem;
`
Text.defaultProps = { theme: DefaultTheme }

export default Text

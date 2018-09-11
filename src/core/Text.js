import styled from 'styled-components'
import DefaultTheme from '../themes/DefaultTheme'

/**
 * Text element
 * HTML: `p`
 * @type {StyledComponentClass<JSX.IntrinsicElements["p"], any, JSX.IntrinsicElements["p"]>}
 */
const Text = styled.p`
  font-family: ${props => props.theme.fontFamily};
  font-size: 1rem;
`
Text.defaultProps = { theme: DefaultTheme }

export default Text

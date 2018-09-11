import styled from 'styled-components'
import DefaultTheme from '../themes/DefaultTheme'

/**
 * View element
 * HTML: `div`
 * @type {StyledComponentClass<JSX.IntrinsicElements["p"], any, JSX.IntrinsicElements["p"]>}
 */
const View = styled.p`
  font-size: 1rem;
  font-family: ${props => props.theme.fontFamily};
`

View.defaultProps = { theme: DefaultTheme }

export default View

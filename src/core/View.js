import styled from 'styled-components'
import DefaultTheme from '../themes/DefaultTheme'

/**
 * View element
 * HTML: `div`
 * @type {StyledComponentClass<JSX.IntrinsicElements["p"], any, JSX.IntrinsicElements["p"]>}
 */
const View = styled.div`
  font-size: 1rem;
  font-family: ${props => props.theme.typography.fontFamily};
  text-align: ${props => (props.centered ? 'center' : 'left')};
`

View.defaultProps = { theme: DefaultTheme }

export default View

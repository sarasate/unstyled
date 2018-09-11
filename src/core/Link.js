import styled from 'styled-components'
import DefaultTheme from '../themes/DefaultTheme'

/**
 * Link element
 * HTML: `a`
 * @type {StyledComponentClass<*, any, *>}
 */
const Link = styled.a.attrs({
  href: props => props.to || null,
  rel: props => (props.external ? 'noopener noreferrer' : null),
})`
  font-family: ${props => props.theme.fontFamily};
  font-size: 1rem;
`

Link.defaultProps = { theme: DefaultTheme }

export default Link

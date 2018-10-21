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
  target: props => (props.external ? '_blank' : '_self'),
})`
  color: ${props => props.color || props.theme.typography.fontColor};
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 1rem;
  text-decoration: ${props => (props.underlined ? 'underline' : 'none')};
`

Link.defaultProps = { theme: DefaultTheme }

export default Link

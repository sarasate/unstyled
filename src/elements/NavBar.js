import styled from 'styled-components'
import DefaultTheme from '../themes/DefaultTheme'

export const NavBar = styled.div`
  border-bottom: 1px solid rgba(34, 36, 38, 0.15);
  font-family: ${props => props.theme.typography.fontFamily};
  line-height: 2.875em;
  min-height: 2.875em;
  padding: 0.5rem 1rem;
  position: relative;
`
NavBar.defaultProps = { theme: DefaultTheme }

export default NavBar

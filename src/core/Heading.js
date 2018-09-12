import styled from 'styled-components'
import DefaultTheme from '../themes/DefaultTheme'

// TODO Find a solution to provide a `level` via the polymorphism prop `as`
// of v4
const Heading = styled.h1`
  color: ${props => (props.color ? props.color : 'black')};
  display: block;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.headingFontWeight};
`

Heading.defaultProps = { theme: DefaultTheme }

export default Heading

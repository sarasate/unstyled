import styled from 'styled-components'
import DefaultTheme from '../themes/DefaultTheme'

const Heading = styled.h1`
  color: ${props => (props.color ? props.color : 'black')};
  display: block;
  font-family: ${props => props.theme.fontFamily};
`

Heading.defaultProps = { theme: DefaultTheme }

export default Heading

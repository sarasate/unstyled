import styled from 'styled-components'
import DefaultTheme from '../themes/DefaultTheme'

/**
 * Input field, defaults to `text`.
 * HTML: `input`
 * @type {StyledComponentClass<*, any, *>}
 */
const Input = styled.input.attrs({
  type: 'text',
})`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 1rem;
  line-height: 2rem;
`

Input.defaultProps = { theme: DefaultTheme }

export default Input

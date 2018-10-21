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
  border: 1px inset ${props => props.theme.color.grey};
  border-radius: ${props => (props.rounded ? '0.125rem' : null)};
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 1rem;
  line-height: 1.2rem;
  margin-right: 0.1rem;
  outline: 0;
  padding: 0.4rem 0.5rem;
  &:focus {
    background: #ffffff;
    box-shadow: none;
    outline: 1px solid ${props => props.theme.color.secondary};
    -webkit-box-shadow: none;
  }
`

Input.defaultProps = { theme: DefaultTheme }

export default Input

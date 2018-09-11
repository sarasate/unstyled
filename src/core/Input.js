import styled from 'styled-components'

/**
 * Input field, defaults to `text`.
 * HTML: `input`
 * @type {StyledComponentClass<*, any, *>}
 */
const Input = styled.input.attrs({
  type: 'text',
})`
  font-size: 1rem;
  line-height: 2rem;
`

export default Input

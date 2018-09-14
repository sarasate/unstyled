import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import DefaultTheme from '../themes/DefaultTheme'

/**
 * Button component. This renders a html `button`, not an `input` with type `submit` as `button` is more flexible.
 * HTML: `button`
 * @type {StyledComponentClass<JSX.IntrinsicElements["button"], any, JSX.IntrinsicElements["button"]>}
 */
const Button = styled.button`
  background-color: white;
  border: 2px solid
    ${props => (props.color ? props.color : props.theme.primaryColor)};
  cursor: pointer;
  border-radius: ${({ rounded }) => (rounded ? '.15rem' : 0)};
  display: inline-block;
  color: ${props => (props.color ? props.color : props.theme.primaryColor)};
  cursor: pointer;
  font-family: ${props => props.theme.fontFamily};
  font-size: 1em;
  font-style: normal;
  line-height: 1em;
  margin: 1.5px;
  min-height: 1em;
  padding: 0.6875em 1.5em;
  text-align: center;
  text-decoration: none;
  vertical-align: baseline;
  &:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`

// Props
Button.propTypes = {
  rounded: PropTypes.bool,
}

// Default Theme
Button.defaultProps = { theme: DefaultTheme }

export default Button

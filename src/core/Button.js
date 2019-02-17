import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import theme from '../themes/DefaultTheme'

const chroma = require('chroma-js')

/**
 * Button component. This renders a html `button`, not an `input` with type `submit` as `button` is more flexible.
 * HTML: `button`
 * @type {StyledComponentClass<JSX.IntrinsicElements["button"], any, JSX.IntrinsicElements["button"]>}
 */
const Button = styled.button`
  background-color: ${props =>
    props.color ? props.theme.color[props.color] : props.theme.color.grey};
  //border: 2px solid
  //   ${props => (props.color ? props.color : props.theme.primaryColor)};
  border: ${({ theme }) => theme.button.border};
  border-radius: ${({ rounded }) => (rounded ? '.15rem' : 0)};
  cursor: pointer;
  display: inline-block;
   color: ${props =>
     chroma.contrast(
       props.theme.color[props.color] || 'white',
       props.theme.typography.fontColor
     ) > 7
       ? props.theme.typography.fontColor
       : 'white'};
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 1em;
  font-style: normal;
  font-weight: bold;
  line-height: 1em;
  margin: ${({ theme }) => theme.button.margin};
  min-height: ${({ theme }) => theme.button.minHeight};
  padding: ${({ theme }) => theme.button.padding};
  text-align: ${({ theme }) => theme.button.textAlign};
  text-decoration: ${({ theme }) => theme.button.textDecoration}; 
  vertical-align: ${({ theme }) => theme.button.verticalAlign};
  &:hover {
     background-color: ${props => {
       return chroma(
         props.theme.color[props.color] || props.theme.color.grey
       ).darken()
     }};
  }
`

// Props
Button.propTypes = {
  rounded: PropTypes.bool,
}

// Default Theme
Button.defaultProps = { theme }

export default Button

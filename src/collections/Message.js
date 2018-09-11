import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import DefaultTheme from '../themes/DefaultTheme'

/**
 * The Message container.
 */
export const Message = styled.div`
  background: ${({ theme }) => theme.secondaryColor};
  border-radius: ${({ rounded }) => (rounded ? '0.25rem' : 0)};
  color: ${({ theme, color }) => (color ? theme[color] : theme.primaryColor)};
  font-family: ${props => props.theme.fontFamily};
  line-height: 1.4285em;
  min-height: 1em;
  margin: 1em 0em;
  padding: 1em 1.5em;
  position: relative;
  //color: rgba(0, 0, 0, 0.87);
  -webkit-transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease,
    -webkit-box-shadow 0.1s ease;
  transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease,
    -webkit-box-shadow 0.1s ease;
  transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease,
    box-shadow 0.1s ease;
  transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease,
    box-shadow 0.1s ease, -webkit-box-shadow 0.1s ease;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.22) inset,
    0px 0px 0px 0px
      ${({ theme, color }) => (color ? theme[color] : theme.primaryColor)};
  box-shadow: 0px 0px 0px 1px
      ${({ theme, color }) => (color ? theme[color] : theme.primaryColor)} inset,
    0px 0px 0px 0px
      ${({ theme, color }) => (color ? theme[color] : theme.primaryColor)};
  &:first-child {
    margin-top: 0em;
  }
  &:last-child {
    margin-bottom: 0em;
  }
`

const Header = styled.div`
  display: block;
  font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin: -0.14285714em 0em 0rem 0em;
`

const Text = styled.p`
  opacity: 0.85;
  margin: 0.75em 0em;
  &:first-child {
    margin-top: 0em;
  }
  &:last-child {
    margin-bottom: 0em;
  }
`

// Props
Message.propTypes = {
  color: PropTypes.string,
  rounded: PropTypes.bool,
}

// Default Theme
Message.defaultProps = { theme: DefaultTheme }

// Assign children
Message.Header = Header
Message.Text = Text

export default Message

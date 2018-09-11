import React from 'react'
import styled from 'styled-components'
import DefaultTheme from '../themes/DefaultTheme'

/**
 * A major title block.
 */
export const Header = styled.div`
  border: none;
  color: ${props => (props.color ? props.color : 'rgba(0, 0, 0, 0.87)')};
  font-family: ${props => props.theme.fontFamily};
  font-weight: bold;
  line-height: 1.28571429em;
  margin: calc(2rem - 0.14285714em) 0em 1rem;
  padding: 0em 0em;
  text-transform: none;
`

Header.defaultProps = { theme: DefaultTheme }

export default Header

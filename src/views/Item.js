import React from 'react'
import styled from 'styled-components'
import DefaultTheme from '../themes/DefaultTheme'

/**
 * Item component.
 */
export const Item = styled.div`
  background: transparent;
  border-radius: 0rem;
  border: none;
  box-shadow: none;
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  font-family: ${props => props.theme.fontFamily};
  margin: 1em 0em;
  min-height: 0px;
  padding: 0em;
  transition: box-shadow 0.1s ease;
  width: 100%;
  -webkit-transition: box-shadow 0.1s ease;
`

const Content = styled.div`
  background: none;
  border-radius: 0em;
  border: none;
  box-shadow: none;
  display: block;
  font-family: ${props => props.theme.fontFamily};
  flex: 1 1 auto;
  font-size: 1em;
  margin: 0em;
  padding: 0em;
  -ms-flex: 1 1 auto;
  -webkit-box-flex: 1;
`

const Header = styled.div`
  color: rgba(0, 0, 0, 0.85);
  display: inline-block;
  font-family: ${props => props.theme.fontFamily};
  font-weight: bold;
  margin: -0.21425em 0em 0em;
`

const Text = styled.div`
  color: rgba(0, 0, 0, 0.87);
  font-family: ${props => props.theme.fontFamily};
  font-size: 1em;
  line-height: 1.4285em;
  margin-top: 0.6em;
`

// Default Theme

Item.defaultProps = { theme: DefaultTheme }
Content.defaultProps = { theme: DefaultTheme }
Header.defaultProps = { theme: DefaultTheme }
Text.defaultProps = { theme: DefaultTheme }

// Assign children
Item.Content = Content
Item.Header = Header
Item.Text = Text

export default Item

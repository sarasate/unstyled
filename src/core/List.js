import React from 'react'
import styled from 'styled-components'
import theme from '../themes/DefaultTheme'

export const List = styled.ul`
  font-family: ${props => props.theme.fontFamily};
`

export const ListItem = styled.li`
  font-family: ${props => props.theme.fontFamily};
`

const Element = props => (
  <List as={`${props.ordered ? 'ol' : 'ul'}`} {...props} />
)

Element.defaultProps = { theme }
ListItem.defaultProps = { theme }

Element.Item = ListItem

export default Element

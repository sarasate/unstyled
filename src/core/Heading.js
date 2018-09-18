import React from 'react'
import styled from 'styled-components'
import DefaultTheme from '../themes/DefaultTheme'

// Quick and dirty fix to get font sizes for headings
//TODO generate sizes dynamically from base size
const setFontSize = value => {
  switch (value) {
    case 'h2':
      return '1.4rem'
    case 'h3':
      return '1.2rem'
    case 'h4':
      return '1rem'
    case 'h5':
      return '0.9rem'
    case 'h6':
      return '0.8rem'
    default:
      return '1.6rem'
  }
}

// TODO Find a solution to provide a `level` via the polymorphism prop `as`
// of v4
const Heading = styled.h1`
  color: ${props => (props.color ? props.color : props.theme.fontColor)};
  display: block;
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => setFontSize(props.as)};
  font-weight: ${props => props.theme.headingFontWeight};
`

const Element = props => {
  return (
    <Heading as={`h${props.level || 1}`} {...props}>
      {props.children}
    </Heading>
  )
}

Heading.defaultProps = { theme: DefaultTheme }

export default Element

import React from 'react'
import styled from 'styled-components'
import DefaultTheme from '../themes/DefaultTheme'

// Set font size for headings
const setFontSize = (value, size) => {
  const sizes = {
    h1: `calc(${size}*1)`,
    h2: `calc(${size} * 0.9)`,
    h3: `calc(${size} * 0.8)`,
    h4: `calc(${size} * 0.7)`,
    h5: `calc(${size} * 0.6)`,
    h6: `calc(${size} * 0.5)`,
    default: `calc(${size}*1)`,
  }
  return sizes[value] || sizes.default
}

const Heading = styled.h1`
  color: ${props => (props.color ? props.color : props.theme.typography.fontColor)};
  display: block;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => setFontSize(props.as, props.theme.heading.fontSize)};
  font-weight: ${props => props.theme.heading.fontWeight};
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

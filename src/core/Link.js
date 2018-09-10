import React from 'react'
import styled from 'styled-components'

const Link = styled.a.attrs({
  href: props => props.to || null,
  rel: props => (props.external ? 'noopener noreferrer' : null),
})`
  font-size: 1rem;
`

export default Link

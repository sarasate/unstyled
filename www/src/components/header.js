import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Container } from 'unstyled'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <Container>
        <Item to="/">{siteTitle}</Item>
        <Item to="/core">Core</Item>
      </Container>
    </div>
  </div>
)

// TODO Use styled-components v4 with `to` prop
const Item = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 1rem;
`

export default Header

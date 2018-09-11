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
        <Item as={Link} to="/">
          {siteTitle}
        </Item>
        <Item as={Link} to="/core">
          Core
        </Item>
      </Container>
    </div>
  </div>
)

const Item = styled.div`
  color: white;
  text-decoration: none;
  margin-right: 1rem;
`

export default Header

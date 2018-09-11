import React from 'react'
import { Link } from 'gatsby'
import { Container, Menu } from 'unstyled'
import MainMenu from 'components/MainMenu'

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
        <MainMenu />
      </Container>
    </div>
  </div>
)

export default Header

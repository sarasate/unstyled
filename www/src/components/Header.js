import React from 'react'
import { Container } from 'unstyled'
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
      }}
    >
      <Container>
        <MainMenu />
      </Container>
    </div>
  </div>
)

export default Header

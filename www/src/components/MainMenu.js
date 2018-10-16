import React from 'react'
import { Menu } from 'unstyled'
import { Link } from 'gatsby'

const MainMenu = () => {
  return (
    <Menu color="white" borderless>
      <Menu.Item as={Link} to="/">
        Unstyled
      </Menu.Item>
      <Menu.Item as={Link} to="/core/button/">
        Documentation
      </Menu.Item>
    </Menu>
  )
}

export default MainMenu

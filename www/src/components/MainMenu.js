import React from 'react'
import { Menu } from 'unstyled'
import { Link } from 'gatsby'

const MainMenu = () => {
  return (
    <Menu color="white" borderless>
      <Menu.Item as={Link} to="/">
        Unstyled
      </Menu.Item>
      <Menu.Item as={Link} to="/core">
        Core
      </Menu.Item>
      <Menu.Item as={Link} to="/collections">
        Collections
      </Menu.Item>
      <Menu.Item as={Link} to="/elements">
        Elements
      </Menu.Item>
      <Menu.Item as={Link} to="/views">
        Views
      </Menu.Item>
    </Menu>
  )
}

export default MainMenu

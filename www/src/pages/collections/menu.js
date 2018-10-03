import React from 'react'
import Layout from 'components/Layout.js'
import { Heading, Text, Menu } from 'unstyled'

const MenuPage = () => (
  <Layout>
    <Heading>Menu</Heading>
    <Menu rounded>
      <Menu.Item>Unstyled</Menu.Item>
      <Menu.Item>Docs</Menu.Item>
      <Menu.Item>About</Menu.Item>
    </Menu>
    <Menu rounded vertical>
      <Menu.Item>Unstyled</Menu.Item>
      <Menu.Item>Docs</Menu.Item>
      <Menu.Item>About</Menu.Item>
    </Menu>
  </Layout>
)

export default MenuPage

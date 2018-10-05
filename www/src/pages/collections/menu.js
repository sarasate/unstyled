import React from 'react'
import Layout from 'components/Layout.js'
import { Heading, Menu } from 'unstyled'
import Meta from '../../components/Meta'

const MenuPage = () => (
  <Layout>
    <Meta data={{ name: 'Menu', description: 'Menu component' }} />
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

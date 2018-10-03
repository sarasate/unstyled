import { Link } from 'gatsby'
import React from 'react'
import { Menu, Sidebar } from 'unstyled'

const SidebarMenu = () => (
  <Sidebar as={Menu} vertical>
    <Menu.Item as={Link} to="/">
      Unstyled
    </Menu.Item>
    {Object.entries(menuItems).map(entry => {
      return (
        <>
          <Menu.Item bold>{entry[0]}</Menu.Item>
          {entry[1].map(item => (
            <Menu.Item
              as={Link}
              to={`/${entry[0].toLowerCase()}/${item.toLowerCase()}`}
            >
              {item}
            </Menu.Item>
          ))}
        </>
      )
    })}
    <Menu.Item level={2} bold>
      Core
    </Menu.Item>
  </Sidebar>
)

export default SidebarMenu

const menuItems = {
  Core: [
    'Button',
    'Code',
    'Heading',
    'Image',
    'Input',
    'Label',
    'Link',
    'List',
    'Span',
    'Table',
    'Text',
    'View',
  ],
  Collections: ['Grid', 'Menu', 'Message'],
  Elements: [
    'Badge',
    'Container',
    'Dropdown',
    'Header',
    'Loader',
    'NavBar',
    'Pagination',
    'Segment',
    'Sidebar',
  ],
  Views: ['Card', 'Item'],
}

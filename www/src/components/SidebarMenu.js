import { Link } from 'gatsby'
import React from 'react'
import { Menu, Sidebar } from 'unstyled'

const SidebarMenu = () => (
  <Sidebar as={Menu} vertical>
    <Menu.Item as={Link} to="/" color="rebeccapurple">
      Unstyled
    </Menu.Item>
    {Object.entries(menuItems).map(entry => {
      return (
        <div key={entry[0]}>
          <Menu.Item bold key={entry[0]}>
            {entry[0]}
          </Menu.Item>
          {entry[1].map(item => (
            <Menu.Item
              key={item}
              as={Link}
              to={`/${entry[0].toLowerCase()}/${item.toLowerCase()}/`}
            >
              {item}
            </Menu.Item>
          ))}
        </div>
      )
    })}
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
    'Label',
    'Loader',
    'NavBar',
    'Pagination',
    'Segment',
    'Sidebar',
  ],
  Views: ['Card', 'Item'],
}

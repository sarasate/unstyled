import React from 'react'
import Layout from 'components/Layout.js'
import { Heading, Text, Dropdown } from 'unstyled'

const DropdownPage = () => (
  <Layout>
    <Heading>Dropdown (CSS only)</Heading>
    <Dropdown>
      <Dropdown.Header>Dropdown</Dropdown.Header>
      <Dropdown.Menu rounded>
        <Dropdown.Item>1. Dropdown Item</Dropdown.Item>
        <Dropdown.Item>2. Dropdown Item</Dropdown.Item>
        <Dropdown.Item>3. Dropdown Item</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Layout>
)

export default DropdownPage

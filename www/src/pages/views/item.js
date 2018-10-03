import React from 'react'
import Layout from 'components/Layout.js'
import { Heading, Text, Item } from 'unstyled'

const ItemPage = () => (
  <Layout>
    <Heading as="h2">Item</Heading>
    <Item>
      <Item.Content>
        <Item.Header>Item 1</Item.Header>
        <Item.Text>Item Text</Item.Text>
      </Item.Content>
    </Item>
    <Item>
      <Item.Content>
        <Item.Header>Item 2</Item.Header>
        <Item.Text>Item Text</Item.Text>
      </Item.Content>
    </Item>
    <Item>
      <Item.Content>
        <Item.Header>Item 3</Item.Header>
        <Item.Text>Item Text </Item.Text>
      </Item.Content>
    </Item>
  </Layout>
)

export default ItemPage

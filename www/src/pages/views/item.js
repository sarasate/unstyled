import React from 'react'
import Layout from 'components/Layout.js'
import { Heading, Item } from 'unstyled'
import Meta from '../../components/Meta'

const ItemPage = () => (
  <Layout>
    <Meta data={{ name: 'Item', description: 'Item component' }} />
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

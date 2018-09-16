import React from 'react'
import Helmet from 'react-helmet'
import Layout from 'components/layout.js'
import { Header } from 'unstyled'
import { Card, Item, Heading, Image } from 'unstyled'

const ViewsPage = props => {
  return (
    <Layout>
      <Helmet
        title="Views"
        meta={[
          {
            name: 'description',
            content:
              'Complex elements which can be used standalone or in lists like Card or Items.',
          },
        ]}
      />
      <Heading>Views</Heading>
      <Header>
        Complex elements which can be used standalone or in lists like Card or
        Items
      </Header>
      {/* Card */}
      <Heading as="h2">Card</Heading>
      <Card>
        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        <Card.Content>
          <Card.Header>Card Title</Card.Header>
          <Card.Meta>Meta Text</Card.Meta>
          <Card.Description>This is a sample card.</Card.Description>
        </Card.Content>
      </Card>
      {/* Item */}
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
}

export default ViewsPage

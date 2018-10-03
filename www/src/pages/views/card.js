import React from 'react'
import Layout from 'components/Layout.js'
import { Heading, Text, Card, Image } from 'unstyled'

const CardPage = () => (
  <Layout>
    <Heading as="h2">Card</Heading>
    <Card>
      <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
      <Card.Content>
        <Card.Header>Card Title</Card.Header>
        <Card.Meta>Meta Text</Card.Meta>
        <Card.Description>This is a sample card.</Card.Description>
      </Card.Content>
    </Card>
  </Layout>
)

export default CardPage

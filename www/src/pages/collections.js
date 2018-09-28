import React from 'react'
import Helmet from 'react-helmet'
import Layout from 'components/layout.js'
import { Header } from 'unstyled'
import { Heading, Grid, Menu, Message } from 'unstyled'

const CollectionsPage = props => {
  return (
    <Layout>
      <Helmet
        title="Collections"
        meta={[
          {
            name: 'description',
            content: 'Aggregated elements like forms, menus and tables.',
          },
        ]}
      />
      <Heading>Collections</Heading>
      <Header>Aggregated elements like forms, menus and tables</Header>
      <Heading as="h2">Grid</Heading>
      <Grid columns={3}>
        <Grid.Column>Column 1</Grid.Column>
        <Grid.Column>Column 2</Grid.Column>
        <Grid.Column>Column 3</Grid.Column>
        <Grid.Column>Column 4</Grid.Column>
        <Grid.Column>Column 5</Grid.Column>
        <Grid.Column>Column 6</Grid.Column>
      </Grid>

      <Heading as="h2">Menu</Heading>
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
      <Heading as="h2">Message</Heading>
      <Message>
        <Message.Header>This is a message</Message.Header>
        <Message.Text>This is a description of the message</Message.Text>
      </Message>
      <Message color="red" rounded>
        <Message.Header>
          This is a themed colored message with round borders .
        </Message.Header>
        <Message.Text>This is a description of the message</Message.Text>
      </Message>
    </Layout>
  )
}

export default CollectionsPage

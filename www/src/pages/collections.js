import React from 'react'
import Layout from 'components/layout.js'
import { Header } from 'unstyled'
import { Container, Heading, Grid, Menu, Message } from 'unstyled'

const CollectionsPage = props => {
  return (
    <Layout>
      <Heading>Collections</Heading>
      <Header>Aggregated elements like forms, menus and tables</Header>
      <Header>Grid</Header>
      <Grid columns={3}>
        <Grid.Column>Column 1</Grid.Column>
        <Grid.Column>Column 2</Grid.Column>
        <Grid.Column>Column 3</Grid.Column>
        <Grid.Column>Column 4</Grid.Column>
        <Grid.Column>Column 5</Grid.Column>
        <Grid.Column>Column 6</Grid.Column>
      </Grid>

      <Header>Menu</Header>
      <Menu rounded>
        <Menu.Item>Unstyled</Menu.Item>
        <Menu.Item>Docs</Menu.Item>
        <Menu.Item>About</Menu.Item>
      </Menu>
      <Header>Message</Header>
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

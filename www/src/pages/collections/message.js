import React from 'react'
import Layout from 'components/Layout.js'
import { Heading, Text, Message } from 'unstyled'
import Meta from '../../components/Meta'

const MessagePage = () => (
  <Layout>
    <Meta data={{ name: 'Message', description: 'Message component' }} />
    <Heading>Message</Heading>
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

export default MessagePage

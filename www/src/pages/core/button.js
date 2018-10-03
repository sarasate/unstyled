import React from 'react'
import Layout from 'components/layout.js'
import { Button, Heading, Text } from 'unstyled'

const ButtonPage = () => (
  <Layout>
    <Heading>Button</Heading>
    <Text>Buttons for user interactions. Implements a HTML `button` tag. </Text>
    <Heading level={2}> A standard button</Heading>
    <Button>Button</Button>
    <Heading level={2}>Customized buttons</Heading>
    <Button rounded>Rounded Button</Button>
    <Button color="palevioletred">Button</Button>
  </Layout>
)

export default ButtonPage

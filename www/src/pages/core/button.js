import React from 'react'
import Layout from 'components/Layout.js'
import { Button, Heading, Text } from 'unstyled'
import Meta from 'components/Meta'

const ButtonPage = () => (
  <Layout>
    <Meta data={{ name: 'Button', description: 'Button component' }} />
    <Heading>Button</Heading>
    <Text>Buttons for user interactions. Implements a HTML `button` tag. </Text>
    <Heading level={2}> A standard button</Heading>
    <Button>Button</Button>
    <Heading level={2}>Customized buttons</Heading>
    <Button rounded>Rounded </Button>
    <Button color="primary" rounded>
      Primary
    </Button>
    <Button color="secondary">Secondary</Button>
  </Layout>
)

export default ButtonPage

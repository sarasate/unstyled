import React from 'react'
import Layout from 'components/Layout.js'
import { Button, Heading, Text } from 'unstyled'
import Meta from 'components/Meta'

const ButtonPage = () => (
  <Layout>
    <Meta data={{ name: 'Button', description: 'Button component' }} />
    <Heading>Button</Heading>
    <Text>Buttons for user interactions. Implements a HTML `button` tag. </Text>
    <Heading level={2}>Standard Buttons</Heading>
    <Button>Rounded </Button>
    <Button color="primary">Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button color="alert">Alert</Button>
    <Button color="warning">Warning</Button>
    <Button color="info">Info</Button>
    <Heading level={2}>Rounded buttons</Heading>
    <Button rounded>Rounded </Button>
    <Button color="primary" rounded>
      Primary
    </Button>
    <Button color="secondary" rounded>
      Secondary
    </Button>
    <Button color="alert" rounded>
      Alert
    </Button>
    <Button color="warning" rounded>
      Warning
    </Button>
    <Button color="info" rounded>
      Info
    </Button>
  </Layout>
)

export default ButtonPage

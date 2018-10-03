import React from 'react'
import Layout from 'components/Layout.js'
import { Button, Code, Heading, Text } from 'unstyled'

const CodePage = () => (
  <Layout>
    <Heading>Code</Heading>
    <Text>Code formatted text.</Text>
    <Text>
      This is <Code>Code formatted</Code> text.
    </Text>
  </Layout>
)

export default CodePage

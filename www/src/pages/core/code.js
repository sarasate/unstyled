import React from 'react'
import Layout from 'components/Layout.js'
import { Button, Code, Heading, Text } from 'unstyled'
import Meta from '../../components/Meta'

const CodePage = () => (
  <Layout>
    <Meta data={{ name: 'Code', description: 'Code component' }} />
    <Heading>Code</Heading>
    <Text>Code formatted text.</Text>
    <Text>
      This is <Code>Code formatted</Code> text.
    </Text>
  </Layout>
)

export default CodePage

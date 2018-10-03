import React from 'react'
import Layout from 'components/Layout.js'
import { Heading, Span, Text } from 'unstyled'
import Meta from '../../components/Meta'

const TextPage = () => (
  <Layout>
    <Meta data={{ name: 'Text', description: 'Text component' }} />
    <Heading>Text</Heading>
    <Text>This is a `Text`, defining a HTML `p` tag.</Text>
  </Layout>
)

export default TextPage

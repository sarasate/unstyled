import React from 'react'
import Layout from 'components/Layout.js'
import { Heading, Span, Text } from 'unstyled'

const SpanPage = () => (
  <Layout>
    <Heading>Span</Heading>
    <Text>
      This is a <Span>`Span`</Span> inside a `Text`.
    </Text>
  </Layout>
)

export default SpanPage

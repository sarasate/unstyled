import React from 'react'
import Layout from 'components/Layout.js'
import { Heading, Span, Text } from 'unstyled'
import Meta from '../../components/Meta'

const SpanPage = () => (
  <Layout>
    <Meta data={{ name: 'Span', description: 'Span component' }} />
    <Heading>Span</Heading>
    <Text>
      This is a <Span>`Span`</Span> inside a `Text`.
    </Text>
  </Layout>
)

export default SpanPage

import React from 'react'
import Layout from 'components/Layout.js'
import { Heading, Text, Loader, Segment } from 'unstyled'

const LoaderPage = () => (
  <Layout>
    <Meta data={{ name: 'Loader', description: 'Loader component' }} />
    <Heading as="h2">Loader</Heading>
    <Segment
      style={{
        height: 100,
        width: 200,
        border: '1px solid silver',
        position: 'relative',
      }}
    >
      <Loader />
    </Segment>
  </Layout>
)

export default LoaderPage

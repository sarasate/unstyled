import React from 'react'
import Layout from 'components/Layout.js'
import { Heading, Text } from 'unstyled'

const ContainerPage = () => (
  <Layout>
    <Heading>Container</Heading>
    <Text>
      A `Container` is a non visible wrapper component to limit content to max
      width.
    </Text>
  </Layout>
)

export default ContainerPage

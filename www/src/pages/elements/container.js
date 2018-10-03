import React from 'react'
import Layout from 'components/Layout.js'
import { Heading, Text } from 'unstyled'
import Meta from '../../components/Meta'

const ContainerPage = () => (
  <Layout>
    <Meta data={{ name: 'Container', description: 'Container component' }} />
    <Heading>Container</Heading>
    <Text>
      A `Container` is a non visible wrapper component to limit content to max
      width.
    </Text>
  </Layout>
)

export default ContainerPage

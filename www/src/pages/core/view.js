import React from 'react'
import Layout from 'components/Layout.js'
import { Heading, Span, Text } from 'unstyled'
import Meta from '../../components/Meta'

const ViewPage = () => (
  <Layout>
    <Meta data={{ name: 'View', description: 'View component' }} />
    <Heading>View</Heading>
    <Text>A `View` resembles a HTML `div` tag.</Text>
  </Layout>
)

export default ViewPage

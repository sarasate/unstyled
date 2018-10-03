import React from 'react'
import Layout from 'components/Layout.js'
import { Heading, Link, Text } from 'unstyled'

const LinkPage = () => (
  <Layout>
    <Heading>Link</Heading>
    <Text>A standard Link component</Text>
    <Link to="https://www.unstyled.io">Link</Link>
  </Layout>
)

export default LinkPage

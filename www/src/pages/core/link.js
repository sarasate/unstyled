import React from 'react'
import Layout from 'components/Layout.js'
import { Heading, Link, Text } from 'unstyled'
import Meta from '../../components/Meta'

const LinkPage = () => (
  <Layout>
    <Meta data={{ name: 'Link', description: 'Link component' }} />
    <Heading>Link</Heading>
    <Text>A standard Link component</Text>
    <Link to="https://www.unstyled.io">Link</Link>
  </Layout>
)

export default LinkPage

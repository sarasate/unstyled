import React from 'react'
import Layout from 'components/Layout.js'
import { Badge, Heading, Text } from 'unstyled'
import Meta from '../../components/Meta'

const BadgePage = () => (
  <Layout>
    <Meta data={{ name: 'Badge', description: 'Badge component' }} />
    <Heading level={2}>Badge</Heading>
    <Badge>Badge</Badge>
  </Layout>
)

export default BadgePage

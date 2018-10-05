import React from 'react'
import Layout from 'components/Layout.js'
import { Badge, Heading } from 'unstyled'
import Meta from '../../components/Meta'

const BadgePage = () => (
  <Layout>
    <Meta data={{ name: 'Badge', description: 'Badge component' }} />
    <Heading level={2}>Badge</Heading>
    <Badge>1</Badge>
    <Badge color="green">2</Badge>
    <Badge color="red">3</Badge>
  </Layout>
)

export default BadgePage

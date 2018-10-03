import React from 'react'
import Layout from 'components/Layout.js'
import { Heading, Header } from 'unstyled'
import Meta from '../../components/Meta'

const HeaderPage = () => (
  <Layout>
    <Meta data={{ name: 'Header', description: 'Header component' }} />
    <Heading>Header</Heading>
    <Header>A `Header` wraps a content summary.</Header>
  </Layout>
)

export default HeaderPage

import React from 'react'
import Layout from 'components/layout.js'
import { Header, Heading, Text } from 'unstyled'

const CorePage = props => {
  return (
    <Layout>
      <Header>
        Standard elements to implement standard HTML tags as React components
      </Header>
      <Heading>Headings</Heading>
      <Heading as="h1">Heading 1</Heading>
      <Heading as="h2">Heading 2</Heading>
      <Heading as="h3">Heading 3</Heading>
      <Heading as="h4">Heading 4</Heading>
      <Heading as="h5">Heading 5</Heading>
      <Heading as="h6">Heading 6</Heading>

      <Text />
      <div />
    </Layout>
  )
}

export default CorePage

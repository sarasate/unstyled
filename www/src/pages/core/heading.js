import React from 'react'
import Layout from 'components/Layout.js'
import { Button, Code, Heading, Text } from 'unstyled'

const HeadingPage = () => (
  <Layout>
    <Heading>Headings</Heading>
    <Heading level={1}>Heading 1</Heading>
    <Heading level={2}>Heading 2</Heading>
    <Heading level={3}>Heading 3</Heading>
    <Heading level={4}>Heading 4</Heading>
    <Heading level={5}>Heading 5</Heading>
    <Heading level={6}>Heading 6</Heading>
  </Layout>
)

export default HeadingPage

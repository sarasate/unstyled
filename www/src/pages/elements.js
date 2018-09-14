import React from 'react'
import Layout from 'components/layout.js'
import { Badge, Header, Heading, Label, Loader, Segment } from 'unstyled'
const ElementsPage = props => {
  return (
    <Layout>
      <Heading>Elements</Heading>
      <Header>Single elements like Badges, Segments or Labels</Header>
      {/* Badge */}
      <Heading as="h2">Badge</Heading>
      <Badge>Badge</Badge>

      {/* Label */}
      <Heading as="h2">Label</Heading>
      <Label>Basic Label</Label>

      {/* Loader */}
      <Heading as="h2">Loader</Heading>
      <Segment
        style={{
          height: 100,
          width: 200,
          border: '1px solid silver',
          position: 'relative',
        }}
      >
        <Loader />
      </Segment>

      {/*Segment*/}
      <Heading as="h2">Segment</Heading>
      <Segment>Segment for any kind of content</Segment>
    </Layout>
  )
}

export default ElementsPage

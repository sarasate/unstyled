import React from 'react'
import Layout from 'components/layout.js'
import { Badge, Header, Heading, Label, Loader, Segment } from 'unstyled'
const ElementsPage = props => {
  return (
    <Layout>
      <Heading>Elements</Heading>
      <Header>Single elements like Badges, Segments or Labels</Header>
      {/* Badge */}
      <Header>Badge</Header>
      <Badge>Badge</Badge>

      {/* Label */}
      <Header>Label</Header>
      <Label>Basic Label</Label>

      {/* Loader */}
      <Header>Loader</Header>
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
      <Header>Segment</Header>
      <Segment>Segment for any kind of content</Segment>
    </Layout>
  )
}

export default ElementsPage

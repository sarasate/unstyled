import React from 'react'
import Layout from 'components/Layout.js'
import Helmet from 'react-helmet'
import {
  Badge,
  Dropdown,
  Header,
  Heading,
  Label,
  Loader,
  Pagination,
  Segment,
} from 'unstyled'
const ElementsPage = props => {
  return (
    <Layout>
      <Helmet
        title="Elements"
        meta={[
          {
            name: 'description',
            content: 'Single elements like Badges, Segments or Labels.',
          },
        ]}
      />
      <Heading>Elements</Heading>
      <Header>Single elements like Badges, Segments or Labels</Header>
      {/* Badge */}
      <Heading level={2}>Badge</Heading>
      <Badge>Badge</Badge>

      <Heading as="h2">Dropdown (CSS only)</Heading>
      <Dropdown>
        <Dropdown.Header>Dropdown</Dropdown.Header>
        <Dropdown.Menu rounded>
          <Dropdown.Item>1. Dropdown Item</Dropdown.Item>
          <Dropdown.Item>2. Dropdown Item</Dropdown.Item>
          <Dropdown.Item>3. Dropdown Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

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

      {/* Pagination */}
      <Heading level={2}>Pagination</Heading>
      <Pagination>
        <Pagination.Item>Previous</Pagination.Item>
        <Pagination.Item>1</Pagination.Item>
        <Pagination.Item>2</Pagination.Item>
        <Pagination.Item>Next</Pagination.Item>
      </Pagination>

      {/*Segment*/}
      <Heading as="h2">Segment</Heading>
      <Segment>Segment for any kind of content</Segment>
    </Layout>
  )
}

export default ElementsPage

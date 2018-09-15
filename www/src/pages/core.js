import React from 'react'
import Layout from 'components/layout.js'
import {
  Button,
  Code,
  Header,
  Heading,
  Image,
  Span,
  Table,
  Text,
} from 'unstyled'

const CorePage = props => {
  return (
    <Layout>
      <Heading>Core</Heading>
      <Header>
        Basic elements to implement standard HTML tags as React components.
      </Header>
      <Heading as="h2">Button</Heading>
      <Button>Button</Button>
      <Button rounded>Rounded Button</Button>
      <Button color="palevioletred">Button</Button>

      <Heading as="h2">Headings</Heading>
      <Heading as="h1">Heading 1</Heading>
      <Heading as="h2">Heading 2</Heading>
      <Heading as="h3">Heading 3</Heading>
      <Heading as="h4">Heading 4</Heading>
      <Heading as="h5">Heading 5</Heading>
      <Heading as="h6">Heading 6</Heading>
      {/* Image */}
      <Heading as="h2">Image</Heading>
      <Image
        src="https://react.semantic-ui.com/images/wireframe/image.png"
        style={{ width: 200 }}
      />

      <Heading>Table</Heading>
      <Table rounded>
        <Table.Header>
          <Table.Row>
            <Table.Heading>1. Heading</Table.Heading>
            <Table.Heading>2. Heading</Table.Heading>
            <Table.Heading>3. Heading</Table.Heading>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1. Cell</Table.Cell>
            <Table.Cell>2. Cell</Table.Cell>
            <Table.Cell>3. Cell</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell>1. Footer Cell</Table.Cell>
            <Table.Cell>2. Footer Cell</Table.Cell>
            <Table.Cell>3. Footer Cell</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>

      <Heading>Text</Heading>
      <Text>
        This is a <Code>Text</Code> element (p).
      </Text>

      <Heading>Span</Heading>
      <Text>
        This is text with a <Span color="green">Span</Span> element.
      </Text>
    </Layout>
  )
}

export default CorePage

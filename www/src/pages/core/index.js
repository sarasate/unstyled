import React from 'react'
import Helmet from 'react-helmet'
import Layout from 'components/layout'
import {
  Button,
  Code,
  Header,
  Heading,
  Image,
  List,
  Span,
  Table,
  Text,
} from 'unstyled'

const CorePage = props => {
  return (
    <Layout>
      <Helmet
        title="Core"
        meta={[
          {
            name: 'description',
            content:
              'Basic elements to implement standard HTML tags as React components.',
          },
        ]}
      />
      <Heading>Core</Heading>
      <Header>
        Basic elements to implement standard HTML tags as React components.
      </Header>
      <Heading as="h2">Button</Heading>
      <Button>Button</Button>
      <Button rounded>Rounded Button</Button>
      <Button color="palevioletred">Button</Button>

      <Heading>Headings</Heading>
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
      <Heading level={6}>Heading 6</Heading>
      {/* Image */}
      <Heading as="h2">Image</Heading>
      <Image
        src="https://react.semantic-ui.com/images/wireframe/image.png"
        style={{ width: 200 }}
      />

      <Heading>List</Heading>
      <List>
        <List.Item>This</List.Item>
        <List.Item>is an </List.Item>
        <List.Item>unordered</List.Item>
        <List.Item>List</List.Item>
      </List>
      <List ordered>
        <List.Item>This</List.Item>
        <List.Item>is an </List.Item>
        <List.Item>ordered</List.Item>
        <List.Item>List</List.Item>
      </List>

      <Heading>Span</Heading>
      <Text>
        This is text with a <Span color="green">Span</Span> element.
      </Text>

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
    </Layout>
  )
}

export default CorePage

import React from 'react'
import Layout from 'components/Layout.js'
import { Heading, Table, Text } from 'unstyled'
import Meta from '../../components/Meta'

const TablePage = () => (
  <Layout>
    <Meta data={{ name: 'Table', description: 'Table component' }} />
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
  </Layout>
)

export default TablePage

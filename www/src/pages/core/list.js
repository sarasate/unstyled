import React from 'react'
import Layout from 'components/Layout.js'
import { Heading, List, Text } from 'unstyled'

const ListPage = () => (
  <Layout>
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
  </Layout>
)

export default ListPage

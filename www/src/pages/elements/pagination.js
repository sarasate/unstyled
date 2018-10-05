import React from 'react'
import Layout from 'components/Layout.js'
import { Heading, Pagination } from 'unstyled'

const PaginationPage = () => (
  <Layout>
    <Heading>Pagination</Heading>
    <Pagination>
      <Pagination.Item>Previous</Pagination.Item>
      <Pagination.Item>1</Pagination.Item>
      <Pagination.Item>2</Pagination.Item>
      <Pagination.Item>Next</Pagination.Item>
    </Pagination>
  </Layout>
)

export default PaginationPage

import React from 'react'
import Layout from 'components/Layout.js'
import { Heading, Input } from 'unstyled'
import Meta from '../../components/Meta'

const InputPage = () => (
  <Layout>
    <Meta data={{ name: 'Input', description: 'Input component' }} />
    <Heading>Input</Heading>
    <Input placeholder="Input Placeholder" />
    <Input placeholder="Input Placeholder" rounded />
  </Layout>
)

export default InputPage

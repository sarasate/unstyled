import React from 'react'
import Layout from 'components/Layout.js'
import { Heading, Label, Text } from 'unstyled'
import Meta from '../../components/Meta'

const LabelPage = () => (
  <Layout>
    <Meta data={{ name: 'Label', description: 'Label component' }} />
    <Heading>Label</Heading>
    <Text>A `Label` displays highlighted classified content.</Text>
    <Label>Label</Label>
    <Label color="rebeccapurple">Label</Label>
    <Label color="red">Label</Label>
    <Label color="green">Label</Label>
  </Layout>
)

export default LabelPage

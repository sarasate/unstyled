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
    <Label color="primary">Label</Label>
    <Label color="secondary">Label</Label>
    <Label color="success">Label</Label>
    <Label color="alert">Label</Label>
    <Label color="warning">Label</Label>
  </Layout>
)

export default LabelPage

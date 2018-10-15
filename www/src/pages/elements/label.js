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
    <Label color="primary">Primary</Label>
    <Label color="secondary">Secondary</Label>
    <Label color="success">Success</Label>
    <Label color="alert">Alert</Label>
    <Label color="warning">Warning</Label>
    <Label color="info">Info</Label>
  </Layout>
)

export default LabelPage

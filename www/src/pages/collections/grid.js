import React from 'react'
import Layout from 'components/Layout.js'
import { Heading, Grid } from 'unstyled'
import Meta from '../../components/Meta'

const GridPage = () => (
  <Layout>
    <Meta data={{ name: 'Grid', description: 'Grid component' }} />
    <Heading>Grid</Heading>
    <Grid columns={3}>
      <Grid.Column>Column 1</Grid.Column>
      <Grid.Column>Column 2</Grid.Column>
      <Grid.Column>Column 3</Grid.Column>
      <Grid.Column>Column 4</Grid.Column>
      <Grid.Column>Column 5</Grid.Column>
      <Grid.Column>Column 6</Grid.Column>
    </Grid>
  </Layout>
)

export default GridPage

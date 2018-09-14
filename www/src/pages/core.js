import React from 'react'
import Layout from 'components/layout.js'
import { Button, Header, Heading, Image, Text } from 'unstyled'

const CorePage = props => {
  return (
    <Layout>
      <Heading as="h2">Button</Heading>
      <Button>Button</Button>
      <Button rounded>Rounded Button</Button>
      <Button color="palevioletred">Button</Button>
      <Header>
        Basic elements to implement standard HTML tags as React components.
      </Header>
      <Heading>Headings</Heading>
      <Heading as="h1">Heading 1</Heading>
      <Heading as="h2">Heading 2</Heading>
      <Heading as="h3">Heading 3</Heading>
      <Heading as="h4">Heading 4</Heading>
      <Heading as="h5">Heading 5</Heading>
      <Heading as="h6">Heading 6</Heading>
      {/* Image */}
      <Header>Image</Header>
      <Image
        src="https://react.semantic-ui.com/images/wireframe/image.png"
        style={{ width: 200 }}
      />
    </Layout>
  )
}

export default CorePage

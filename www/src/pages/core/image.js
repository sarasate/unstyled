import React from 'react'
import Layout from 'components/Layout.js'
import { Heading, Image } from 'unstyled'

const ImagePage = () => (
  <Layout>
    <Heading>Image</Heading>
    <Image
      src="https://react.semantic-ui.com/images/wireframe/image.png"
      style={{ width: 200 }}
    />
  </Layout>
)

export default ImagePage

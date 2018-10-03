import React from 'react'
import Layout from 'components/Layout.js'
import { Heading, Image } from 'unstyled'
import Meta from '../../components/Meta'

const ImagePage = () => (
  <Layout>
    <Meta data={{ name: 'Image', description: 'Image component' }} />
    <Heading>Image</Heading>
    <Image
      src="https://react.semantic-ui.com/images/wireframe/image.png"
      style={{ width: 200 }}
    />
  </Layout>
)

export default ImagePage

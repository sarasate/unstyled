import React from 'react'
import { Header, Text } from 'unstyled'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Header>
      React components with minimal styling, easily to extend. Based on
      styled-components.
    </Header>
    <Text>
      Introduction After years of prototyping and building dozens of apps,
      mainly for clients, I got tired of using CSS Frameworks like Bootstrap or
      Semantic UI with their opinionated style. At some point it seemed to be
      more work to modify those frameworks than to write styles on your own from
      scratch. And their styling isn't great anyway. So I ditched them. Still I
      needed a some kind of a framework, esp. for React, to get started fast
      with (basic) styling without repeating styles I've already written
      somewhere else. When starting out with gatsbyjs I stumbled upon
      `styled-components, gave it a try and liked it immediately. Eventually I
      decided to share my components in a dedicated library because of.. well..
      DRY!!!
    </Text>
  </Layout>
)

export default IndexPage

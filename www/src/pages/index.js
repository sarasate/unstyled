import React from 'react'
import { Container, Heading, Text } from 'unstyled'
import MainMenu from 'components/MainMenu.js'
import styled from 'styled-components'
import 'components/layout.css'

const IndexPage = () => [
  <Head key="head">
    <Container>
      <MainMenu />
      <Heading color="white">
        Minimal UI components for the component age.
      </Heading>
      <Heading color="white" as="h2">
        Extendable UI components with least opinionated style. Based on
        styled-components.
      </Heading>
    </Container>
  </Head>,
  <Container key="content">
    <Heading>Motivation</Heading>
    <Text>
      After years of prototyping and building dozens of apps, mainly for
      clients, I got tired of using CSS Frameworks like Bootstrap or Semantic UI
      with their opinionated style. At some point it seemed to be more work to
      modify those frameworks than to write styles on your own from scratch. And
      their styling isn't great anyway. So I ditched them. Still I needed a some
      kind of a framework, esp. for React, to get started fast with (basic)
      styling without repeating styles I've already written somewhere else. When
      starting out with gatsbyjs I stumbled upon `styled-components, gave it a
      try and liked it immediately. Eventually I decided to share my components
      in a dedicated library because of.. well.. DRY!!!
    </Text>
  </Container>,
]

export default IndexPage

const Head = styled.div`
  background-color: rebeccapurple;
  height: 400px;
  margin: 0;
  padding: 1rem 0;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 0, 0);
  transition-delay: 0s, 0s;
  transition-duration: 6s, 6s;
  transition-property: background, opacity;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.4),
    cubic-bezier(0.68, -0.55, 0.265, 1.4);
`

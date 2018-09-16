import React from 'react'
import { Button, Code, Container, Heading, Link, Text, View } from 'unstyled'
import MainMenu from 'components/MainMenu.js'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import 'components/layout.css'

const IndexPage = () => [
  <Head key="head">
    <Helmet
      key="app-head"
      titleTemplate="%s | Unstyled"
      defaultTitle="Unstyled"
    >
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Minimal UI for the component age." />
    </Helmet>
    <FlexContainer>
      <MainMenu />
      <Heading color="white">
        Minimal UI components for the component age.
      </Heading>
      <Heading color="white" as="h2">
        Extendable UI components with the least opinionated style. Based on
        styled-components.
      </Heading>
    </FlexContainer>
  </Head>,
  <Container key="source">
    <View centered>
      <Button
        as={Link}
        to="https://github.com/sarasate/unstyled"
        external
        target="_blank"
      >
        Github
      </Button>
    </View>
  </Container>,
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
    <Heading>Installation</Heading>
    <Code>yarn add unstyled</Code>
  </Container>,
]

export default IndexPage

const Head = styled.div`
  background-color: rebeccapurple;
  height: 250px;
  margin: 0 0 2rem;
  padding: 1rem 0;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 0, 0);
  transition-delay: 0s, 0s;
  transition-duration: 6s, 6s;
  transition-property: background, opacity;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.4),
    cubic-bezier(0.68, -0.55, 0.265, 1.4);
`

const FlexContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`

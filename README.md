# unstyled

React components with minimal styling, easily to extend. Based on styled-components. Inspired by React Native components and SemanticUI. Will cover all common used html tags and adding convenient components for widely used UI elements.  

WIP: This package is in an early alpha stage. Breaking changes can occur without notification. Already used in production (caution!). Feedback and contributions are welcome.

Versioning (prior to 1.0.0)

`0.Y.Z`: 
* Y => Breaking changes and Features
* Z => Patches 


## Installation

```shell
$ yarn add unstyled
```

or (if you prefer)

```shell
$ npm i --save unstyled
```

### Usage with GatsbyJS
As this lib is mainly used with [GatsbyJS](https://www.gatsbyjs.org) for fast prototyping of new websites I'll cover that first.

```yarn add unstyled styled-components gatsby-plugin-styled-components```


Make sure to install "gatsby-plugin-styled-components" and configure it in
`gatsby-config': 

```plugins: ["gatsby-plugin-styled-components", ...]```

## Example

```jsx harmony
import React from "react";
import { Container, Button } from "unstyled";

const App = () => (
  <Container>
      <h1>Elements</h1>
      <Button>Basic Button</Button>
  </Container>
);

export default App;
```

## Extend Elements

It's easy to extend elements and apply your own styles.
Just use styled-components
[`extend`](https://www.styled-components.com/docs/basics#extending-styles) feature.

```jsx harmony
import Button from 'unstyled'

const CustomButton = Button.extend`
  color: tomato;
`
```

## Theming

Wrap your own theme via styled-components `ThemeProvider`.

```jsx harmony
import styled, { ThemeProvider } from "styled-components"
import {StyledComponentsTheme, Button} from "unstyled"

const Element = () => (
  <ThemeProvider theme={StyledComponentsTheme}>
    <div>
      <h2>Button with custom theme:</h2>
      <Button>
        Styled Button
      </Button>
    </div>
  </ThemeProvider>
)

export default Element
```

## License

Licensed under the MIT License,
Copyright © 2017 [superlumen](https://superlumen.io).

See [LICENSE](./LICENSE) for more information.

[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

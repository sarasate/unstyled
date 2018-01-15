# unstyled

React components with minimal styling, easily to extend. Based on styled-components. Inspired by semantic-ui.

## Installation

`npm i --save unstyled`

or

`yarn add unstyled`

## Example

```
import React from "react";
import { Container, Button } from "unstyled";
import styled from "styled-components";

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

```
import Button from 'unstyled'

const CustomButton = Button.extend`
  color: tomato;
`
```

## Theming

Wrap your own theme via styled-components `ThemeProvider`.

```
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

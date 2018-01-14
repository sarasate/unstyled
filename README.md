# unstyled

React components with minimal styling, easily to extend. Based on styled-components. Inspired by semantic-ui.

## Installation

`npm i --save unstyled`

or

`yarn add unstyled`

## Example

```
import React from "react";
import {
  Button,
  Card,
  Container,
  Grid,
  Header,
  Image,
  Label,
  NavBar
} from "unstyled";
import styled from "styled-components";

const Brand = styled.div`
  font-weight: bold;
`;

const App = () => (
  <div>
    <NavBar>
      <Container>
        <Brand>Unstyled</Brand>
      </Container>
    </NavBar>
    <Container>
      <h1>Collections</h1>
      <Header>Grid</Header>
      <Grid columns={3}>
        <Grid.Column>Column 1</Grid.Column>
        <Grid.Column>Column 2</Grid.Column>
        <Grid.Column>Column 3</Grid.Column>
      </Grid>
      <h1>Elements</h1>
      {/* Button */}
      <Header>Button</Header>
      <Button>Basic Button</Button>
      {/* Image */}
      <Header>Image</Header>
      <Image
        src="https://react.semantic-ui.com/assets/images/avatar/large/matthew.png"
        style={{ width: 200 }}
      />
      {/* Label */}
      <Header>Label</Header>
      <Label>Basic Label</Label>
      <h1>Views</h1>
      <Header>Card</Header>
      <Card>
        <Image src="https://react.semantic-ui.com/assets/images/avatar/large/matthew.png" />
        <Card.Content>
          <Card.Header>Card Title</Card.Header>
          <Card.Meta>Meta Text</Card.Meta>
          <Card.Description>This is a sample card.</Card.Description>
        </Card.Content>
      </Card>
    </Container>
  </div>
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

## License

Licensed under the MIT License, Copyright © 2017 Luis Höfer.

See [LICENSE](./LICENSE) for more information.

[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

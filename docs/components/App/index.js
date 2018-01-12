import React from "react";
import {
  Card,
  Container,
  Button,
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

import React from "react";
import {
  Button,
  Card,
  Container,
  Grid,
  Header,
  Image,
  Label,
  Menu,
  Message,
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
        <Grid.Column>Column 4</Grid.Column>
        <Grid.Column>Column 5</Grid.Column>
        <Grid.Column>Column 6</Grid.Column>
      </Grid>

      <Header>Menu</Header>
      <Menu>
        <Menu.Item href="/">Unstyled</Menu.Item>
        <Menu.Item>Docs</Menu.Item>
        <Menu.Item>About</Menu.Item>
      </Menu>
      <Header>Message</Header>
      <Message>
        <Message.Header>This is a message</Message.Header>
        <Message.Text>This is a description of the message</Message.Text>
      </Message>
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

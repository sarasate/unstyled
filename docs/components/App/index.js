import React from "react";
import {
  Button,
  Card,
  Container,
  Grid,
  Header,
  Image,
  Item,
  Label,
  Loader,
  Menu,
  Message,
  NavBar
} from "unstyled";
import styled from "styled-components";

const Brand = styled.div`
  font-weight: bold;
`;

// Extend the basic button.
const ColoredButton = Button.extend`
  color: palevioletred;
  border-color: palevioletred;
`;

const ColoredMessage = Message.extend`
  color: palevioletred;
  border-color: palevioletred;
  box-shadow: 0px 0px 0px 1px palevioletred inset, 0px 0px 0px 0px palevioletred;
`;

const App = () => (
  <div>
    <NavBar>
      <Container>
        <Brand>Unstyled</Brand>
      </Container>
    </NavBar>
    <Container>
      {/* Collections */}
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
      <Message color="red">
        <Message.Header>This is a themed colored message</Message.Header>
        <Message.Text>This is a description of the message</Message.Text>
      </Message>
      <ColoredMessage>
        <Message.Header>This is an extended colored message.</Message.Header>
        <Message.Text>This is a description of a colored message.</Message.Text>
      </ColoredMessage>

      {/* Elements */}
      <h1>Elements</h1>
      {/* Button */}
      <Header>Button</Header>
      <Button>Basic Button</Button>
      {/* Image */}
      <ColoredButton>Colored Button</ColoredButton>
      <Header>Image</Header>
      <Image
        src="https://react.semantic-ui.com/assets/images/avatar/large/matthew.png"
        style={{ width: 200 }}
      />
      {/* Label */}
      <Header>Label</Header>
      <Label>Basic Label</Label>

      {/* Loader */}
      <Header>Loader</Header>
      <div
        style={{
          height: 100,
          width: 200,
          border: "1px solid silver",
          position: "relative"
        }}
      >
        <Loader />
      </div>

      {/* Views*/}
      <h1>Views</h1>
      {/* Card */}
      <Header>Card</Header>
      <Card>
        <Image src="https://react.semantic-ui.com/assets/images/avatar/large/matthew.png" />
        <Card.Content>
          <Card.Header>Card Title</Card.Header>
          <Card.Meta>Meta Text</Card.Meta>
          <Card.Description>This is a sample card.</Card.Description>
        </Card.Content>
      </Card>
      {/* Item */}
      <Header>Item</Header>
      <Item>
        <Item.Content>
          <Item.Header>Item 1</Item.Header>
          <Item.Text>Item Text</Item.Text>
        </Item.Content>
      </Item>
      <Item>
        <Item.Content>
          <Item.Header>Item 2</Item.Header>
          <Item.Text>Item Text</Item.Text>
        </Item.Content>
      </Item>
      <Item>
        <Item.Content>
          <Item.Header>Item 3</Item.Header>
          <Item.Text>Item Text </Item.Text>
        </Item.Content>
      </Item>
    </Container>
  </div>
);

export default App;

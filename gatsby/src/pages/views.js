import React from "react";
import { Header, Card, Image, Item } from "unstyled";

const ViewsPage = () => (
  <div>
    <Header>Card</Header>
    <Card>
      <Image src="https://react.semantic-ui.com/assets/images/avatar/large/matthew.png" />
      <Card.Content>
        <Card.Header>Card Title</Card.Header>
        <Card.Meta>Meta Text</Card.Meta>
        <Card.Description>This is a sample card.</Card.Description>
      </Card.Content>
    </Card>
  </div>
);

export default ViewsPage;

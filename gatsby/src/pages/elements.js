import React from "react";
import { Header, Button, Image, Label } from "unstyled";

const ElementsPage = () => (
  <div>
    <Header>Button</Header>
    <Button>Basic Button</Button>

    <Header>Image</Header>
    <Image
      src="https://react.semantic-ui.com/assets/images/avatar/large/matthew.png"
      style={{ width: 200 }}
    />

    <Header>Label</Header>
    <Label>Basic Label</Label>
  </div>
);

export default ElementsPage;

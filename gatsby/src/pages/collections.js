import React from "react";
import { Header, Grid, Message } from "unstyled";

const CollectionsPage = () => (
  <div>
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
    <Header>Message</Header>
    <Message>
      <Message.Header>This is a message</Message.Header>
      <Message.Text>This is a description of the message</Message.Text>
    </Message>
  </div>
);

export default CollectionsPage;

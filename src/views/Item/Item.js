import React from "react";
import styled from "styled-components";
import Theme from "../../themes/DefaultTheme";

/**
 * Item component.
 */
const Item = styled.div`
  -webkit-transition: box-shadow 0.1s ease;
  background: transparent;
  border-radius: 0rem;
  border: none;
  box-shadow: none;
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  margin: 1em 0em;
  min-height: 0px;
  padding: 0em;
  transition: box-shadow 0.1s ease;
  width: 100%;
`;

const Content = styled.div`
  -ms-flex: 1 1 auto;
  -webkit-box-flex: 1;
  background: none;
  border-radius: 0em;
  border: none;
  box-shadow: none;
  display: block;
  flex: 1 1 auto;
  font-size: 1em;
  margin: 0em;
  padding: 0em;
`;

const Header = styled.div`
  color: rgba(0, 0, 0, 0.85);
  display: inline-block;
  font-family: "Lato", "Helvetica Neue", Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin: -0.21425em 0em 0em;
`;

const Text = styled.div`
  color: rgba(0, 0, 0, 0.87);
  font-size: 1em;
  line-height: 1.4285em;
  margin-top: 0.6em;
`;

// Default Theme
Item.defaultProps = { theme: Theme };

// Assign children
Item.Content = Content;
Item.Header = Header;
Item.Text = Text;

export default Item;

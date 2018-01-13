import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #e8e8e8;
  border-radius: 0.125em;
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 1em;
  font-style: normal;
  line-height: 1em;
  margin: 0em 0.125em;
  max-width: 100%;
  position: relative;
  vertical-align: baseline;
  width: calc(960px/3);
`;

/**
 * Content Wrapper.
 */
const Content = styled.div`
  padding: 0.5833em 0.833em;
`;

const Header = styled.div`
  color: rgba(0, 0, 0, 0.85);
  display: block;
  font-weight: bold;
  line-height: 1em;
  font-size: 1.3em;
  width: inherit;
`;

const Meta = styled.div`
  margin-top: 0.5em;
  color: rgba(0, 0, 0, 0.4);
`;

const Description = styled.div`
  display: block;
  margin-top: 0.5em;
  width: inherit;
`;

const Element = props => <Card>{props.children}</Card>;

Element.Content = Content;
Element.Header = Header;
Element.Meta = Meta;
Element.Description = Description;

export default Element;

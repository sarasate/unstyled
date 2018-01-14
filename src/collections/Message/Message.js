import React from "react";
import styled from "styled-components";

/**
 * The Message container.
 */
const Message = styled.div`
  position: relative;
  min-height: 1em;
  margin: 1em 0em;
  background: #f8f8f9;
  padding: 1em 1.5em;
  line-height: 1.4285em;
  color: rgba(0, 0, 0, 0.87);
  -webkit-transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease,
    -webkit-box-shadow 0.1s ease;
  transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease,
    -webkit-box-shadow 0.1s ease;
  transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease,
    box-shadow 0.1s ease;
  transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease,
    box-shadow 0.1s ease, -webkit-box-shadow 0.1s ease;
  border-radius: 0.25rem;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.22) inset,
    0px 0px 0px 0px rgba(0, 0, 0, 0);
  box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.22) inset,
    0px 0px 0px 0px rgba(0, 0, 0, 0);
  &:first-child {
    margin-top: 0em;
  }
  &:last-child {
    margin-bottom: 0em;
  }
`;

const Header = styled.div`
  display: block;
  font-family: "Lato", "Helvetica Neue", Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin: -0.14285714em 0em 0rem 0em;
`;

const Text = styled.p`
  opacity: 0.85;
  margin: 0.75em 0em;
  &:first-child {
    margin-top: 0em;
  }
  &:last-child {
    margin-bottom: 0em;
  }
`;

const Element = props => {
  return <Message>{props.children}</Message>;
};

Element.Header = Header;
Element.Text = Text;

export default Element;

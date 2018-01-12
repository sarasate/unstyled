import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 2em;
  line-height: 2em;
  position: relative;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid rgba(34, 36, 38, 0.15);
  min-height: 2.875em;
`;

const NavBar = props => <Container>{props.children}</Container>;

export default NavBar;

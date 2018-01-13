import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border-bottom: 1px solid rgba(34, 36, 38, 0.15);
  line-height: 2.875em;
  min-height: 2.875em;
  padding: 0.5rem 1rem;
  position: relative;
`;

const NavBar = props => <Container>{props.children}</Container>;

export default NavBar;
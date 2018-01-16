import React from "react";
import GatsbyLink from "gatsby-link";
import styled from "styled-components";
import { NavBar, Container } from "unstyled";

const Link = styled(GatsbyLink)`
  color: palevioletred;
  text-decoration: none;
  padding: 0 10px 0 0;
`;

const Header = () => (
  <NavBar>
    <Container>
      <Link to="/">Unstyled</Link>
      <Link to="/collections">Collections</Link>
      <Link to="/elements">Elements</Link>
      <Link to="/views">Views</Link>
    </Container>
  </NavBar>
);

export default Header;

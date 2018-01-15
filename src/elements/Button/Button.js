import React from "react";
import styled from "styled-components";
import DefaultTheme from "../../themes/DefaultTheme";

/**
 * Button Component.
 */
const Button = styled.a`
  color: ${({ theme }) => theme.primaryColor};
  border: 2px solid ${({ theme }) => theme.primaryColor};
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  font-size: 1.1em;
  font-style: normal;
  line-height: 1em;
  margin: 0em 0.25em 0em 0em;
  min-height: 1em;
  padding: 0.6875em 1.5em 0.6875em;
  text-align: center;
  text-decoration: none;
  vertical-align: baseline;
  &:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`;

// Default Theme
Button.defaultProps = { theme: DefaultTheme };

export default Button;

import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import DefaultTheme from "../../themes/DefaultTheme";

/**
 * Button Component.
 */
const Button = styled.a`
  color: ${({ theme }) => theme.primaryColor};
  border: 2px solid ${({ theme }) => theme.primaryColor};
  border-radius: ${({ rounded }) => (rounded ? ".15rem" : 0)};
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

// Props
Button.propTypes = {
  rounded: PropTypes.bool
};

// Default Theme
Button.defaultProps = { theme: DefaultTheme };

export default Button;

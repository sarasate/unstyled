import React from "react";
import styled from "styled-components";
import DefaultTheme from "../../themes/DefaultTheme";

/**
 * A Basic Label representing a HTML form label.
 */
const Badge = styled.span`
  background-color: ${({ theme }) => theme.secondaryColor};
  border: none;
  border-radius: 0.125em;
  color: ${({ theme }) => theme.primaryColor};
  display: inline-block;
  font-size: 1em;
  font-style: normal;
  font-weight: bold;
  line-height: 1em;
  margin: 0em 0.125em;
  min-height: 1em;
  padding: 0.5833em 0.833em;
  text-align: center;
  text-decoration: none;
  vertical-align: baseline;
`;

// Default Theme
Badge.defaultProps = { theme: DefaultTheme };

export default Badge;

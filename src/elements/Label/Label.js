import React from "react";
import styled from "styled-components";
import DefaultTheme from "../../themes/DefaultTheme";

/**
 * A Basic Label representing a HTML form label.
 */
const Label = styled.label`
  border: none;
  color: ${({ theme }) => theme.primaryColor};
  display: inline-block;
  font-size: 1em;
  font-style: normal;
  font-weight: bold;
  line-height: 1em;
  margin: 0 0.125em;
  min-height: 1em;
  vertical-align: baseline;
`;

// Default Theme
Label.defaultProps = { theme: DefaultTheme };

export default Label;

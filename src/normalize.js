import { injectGlobal } from "styled-components";
import styledNormalize from "styled-normalize";

injectGlobal`
  ${styledNormalize}

  html {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

import React from "react";
import styled from "styled-components";

const Segment = styled.div`
  position: relative;
  background: #ffffff;
  -webkit-box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);
  box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);
  margin: 1rem 0em;
  padding: 1em 1em;
  //border-radius:0.25rem;
  border-radius: ${props => (props.rounded ? "0.25rem" : 0)};
  border: 1px solid rgba(34, 36, 38, 0.15);
`;

export default Segment;

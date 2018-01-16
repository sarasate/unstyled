import React from "react";
import styled from "styled-components";

const Loader = styled.div`
  display: block;
  position: relative;
  top: 50%;
  left: 50%;
  margin: 0;
  text-align: center;
  vertical-align: middle;
  z-index: 1000;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  &:before {
    position: absolute;
    content: "";
    top: 0%;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: 500rem;
    border: 0.2em solid rgba(0, 0, 0, 0.1);
  }

  &:after {
    position: absolute;
    content: "";
    top: 0%;
    left: 50%;
    width: 100%;
    height: 100%;
    -webkit-animation: loader 0.6s linear;
    animation: loader 0.6s linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    border-radius: 500rem;
    border-color: #767676 transparent transparent;
    border-style: solid;
    border-width: 0.2em;
    box-shadow: 0px 0px 0px 1px transparent;
  }

  &:before,
  &:after {
    width: 2.28571429rem;
    height: 2.28571429rem;
    margin: 0em 0em 0em -1.14285714rem;
  }
  @-webkit-keyframes loader {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export default Loader;

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { NavBar } from "unstyled";

import Header from "../components/Header";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Unstyled"
      meta={[
        { name: "description", content: "style" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

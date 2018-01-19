import React from "react";
import styled from "styled-components";

/**
 * A Column of the Grid.
 */
const Column = styled.div`
  display: inline-block;
  position: relative;
  width: ${({ width }) => width};
  padding-left: 1rem;
  padding-right: 1rem;
  vertical-align: top;
`;

/**
 * Container component for the Grid.
 */
const Grid = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  padding: 0em;

  // Calculate width for contained columns.
  ${Column} {
    width: ${({ columns }) => (columns ? 100 / columns + "%" : "6.25%")};
  }
`;

/**
 * Push `Grid` props to its children.
 * @param children
 * @param props
 * @returns {Object}
 */
const childrenWithExtraProp = (children, props) =>
  React.Children.map(children, child => {
    return React.cloneElement(child, {
      width: 100 / props.columns + "%"
    });
  });

// Assign children.
Grid.Column = Column;

export default Grid;

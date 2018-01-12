import React from "react";
import styled from "styled-components";

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
`;

/**
 * A Column of the Grid.
 */
const Column = styled.div`
  display: inline-block;
  position: relative;
  width: ${({ width }) => (width ? width : "6.25%")};
  padding-left: 1rem;
  padding-right: 1rem;
  vertical-align: top;
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

const Element = props => {
  return <Grid {...props}>{childrenWithExtraProp(props.children, props)}</Grid>;
};

Element.Column = Column;

export default Element;

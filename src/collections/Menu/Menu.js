import React from "react";
import styled from "styled-components";
import DefaultTheme from "../../themes/DefaultTheme";

const Menu = styled.div`
  display: flex;
  // border: 1px solid ${({ theme }) => theme.primaryColor};
  margin: 1rem 0em;
  border-radius: 0.25rem;
  min-height: 2.875em;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.22) inset,
    0px 0px 0px 0px rgba(0, 0, 0, 0);
  box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.22) inset,
    0px 0px 0px 0px rgba(0, 0, 0, 0);

  &:first-child {
    margin-top: 0rem;
  }
  &:last-child {
    margin-bottom: 0rem;
  }
`;

const Item = styled.a`
  align-items: center;
  border-right: 1px solid rgba(34, 36, 38, 0.22);
  color: ${({ theme }) => theme.black};
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  padding: 0.9375em 1.125em;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  vertical-align: middle;
  line-height: 1;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  font-weight: normal;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.95);
  }
  &:active {
    color: ${({ theme }) => theme.black};
  }
`;

/**
 * Wrapper element for Menu.
 * @param props
 * @returns {*}
 */
const Element = props => {
  return <Menu>{props.children}</Menu>;
};

Menu.defaultProps = { theme: DefaultTheme };
Item.defaultProps = { theme: DefaultTheme };

Element.Item = Item;

export default Element;

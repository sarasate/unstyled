import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import DefaultTheme from '../themes/DefaultTheme'

const MenuItem = styled.a`
  align-items: center;
  border-right: 1px solid rgba(34, 36, 38, 0.22);
  color: ${({ theme }) => theme.black};
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => (props.bold ? '600' : '400')};
  line-height: 1;
  padding: 0.9375em 1.125em;
  position: relative;
  text-decoration: none;
  vertical-align: middle;
  -webkit-box-flex: 0;
  -webkit-box-align: center;
  -ms-flex: 0 0 auto;
  -ms-flex-align: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.95);
  }
  &:active {
    color: ${({ theme }) => theme.black};
  }
`

export const Menu = styled.div`
  display: flex;
  border: ${props => (props.borderless ? 0 : '1px')} solid
    ${({ theme }) => theme.grey};
  border-radius: ${({ rounded }) => (rounded ? '0.15rem' : 0)};
  flex-direction: ${props => (props.vertical ? 'column' : 'row')};
  margin: 1rem 0;
  min-height: 2.875em;
  width: ${props => (props.vertical ? '15rem' : 'auto')};
  //-webkit-box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.22) inset,
  //  0px 0px 0px 0px rgba(0, 0, 0, 0);
  //box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.22) inset,
  //  0px 0px 0px 0px rgba(0, 0, 0, 0);
  ${MenuItem} {
    border-width: ${props => (props.borderless ? 0 : '1px')};
    color: ${props => props.color || 'black'};
    display: ${props => (props.vertical ? 'block' : 'inline')};
  }

  &:first-child {
    margin-top: 0rem;
  }
  &:last-child {
    margin-bottom: 0rem;
  }
`

// Props
Menu.propTypes = {
  rounded: PropTypes.bool,
}
MenuItem.propTypes = {
  bold: PropTypes.bool,
}

Menu.defaultProps = { theme: DefaultTheme }
MenuItem.defaultProps = { theme: DefaultTheme }

Menu.Item = MenuItem

export default Menu

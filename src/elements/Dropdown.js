import styled from 'styled-components'
import theme from '../themes/DefaultTheme'

export const DropdownMenu = styled.div`
  background-color: white;
  border: 1px solid ${props => props.theme.color.grey};
  border-radius: ${props => (props.rounded ? '0.15rem' : null)};
  display: block;
  margin-top: 0.5rem;
  opacity: 0;
  position: absolute;
  transition: visibility 0.5s;
  visibility: hidden;
  z-index: 1;
`

export const DropdownItem = styled.div`
  color: ${props => props.color || props.theme.typography.fontColor};
  display: inline-block;
  font-family: ${props => props.fontFamily || props.theme.typography.fontFamily};
  padding: 0.5rem;
  white-space: nowrap;
`

export const DropdownHeader = styled.div.attrs({ tabIndex: 0 })`
  color: ${props => props.color || props.theme.typography.fontColor};
  cursor: pointer;
  display: inline-block;
  font-family: ${props => props.fontFamily || props.theme.typography.fontFamily};
  opacity: 1;
  outline: 0;
  visibility: visible;
  :focus {
    /* clicking on label should toggle the menu */
    pointer-events: none;
    border: none;
  }
  :focus ~ ${DropdownMenu} {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
`

export const Dropdown = styled.div`
  display: inline-block;
  font-family: ${props => props.fontFamily || props.theme.typography.fontFamily};
  position: relative;
`

Dropdown.defaultProps = { theme }
DropdownMenu.defaultProps = { theme }
DropdownHeader.defaultProps = { theme }
DropdownItem.defaultProps = { theme }

Dropdown.Menu = DropdownMenu
Dropdown.Header = DropdownHeader
Dropdown.Item = DropdownItem

export default Dropdown

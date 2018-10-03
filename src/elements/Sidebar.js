import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import DefaultTheme from '../themes/DefaultTheme'

export const Sidebar = styled.div`
  background-color: ${props => (props.inverted ? 'black' : 'white')};
  border-radius: 0em;
  color: ${props => (props.inverted ? 'white' : 'black')};
  height: 100%;
  left: 0;
  top: 0;
  max-height: 100%;
  margin: 0em;
  overflow-y: auto;
  position: fixed;
  width: 250px;
  z-index: 100;
`

// Props
Sidebar.propTypes = {
  rounded: PropTypes.bool,
}

// Default Theme
Sidebar.defaultProps = { theme: DefaultTheme }

export default Sidebar

import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import DefaultTheme from '../themes/DefaultTheme'

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  color: ${props => (props.inverted ? 'white' : 'black')};
  background-color: ${props => (props.inverted ? 'black' : 'white')};
  will-change: transform;
  height: 100%;
  max-height: 100%;
  border-radius: 0em;
  margin: 0em;
  overflow-y: auto;
  z-index: 100;
`

// Props
Sidebar.propTypes = {
  rounded: PropTypes.bool,
}

// Default Theme
Sidebar.defaultProps = { theme: DefaultTheme }

export default Sidebar

import styled from 'styled-components'
import DefaultTheme from '../themes/DefaultTheme'

export const Segment = styled.div`
  background: #ffffff;
  border-radius: ${props => (props.rounded ? '0.25rem' : 0)};
  border: 1px solid rgba(34, 36, 38, 0.15);
  box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);
  font-family: ${props => props.theme.typography.fontFamily};
  margin: 1rem 0em;
  padding: 1em 1em;
  position: relative;
  -webkit-box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);
`
Segment.defaultProps = { theme: DefaultTheme }

export default Segment

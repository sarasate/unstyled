import styled from 'styled-components'
import theme from '../themes/DefaultTheme'

export const Span = styled.span`
  font-size: ${props => props.fontSize || props.theme.fontSize};
  color: ${props => props.color || props.theme.fontColor};
`

Span.defaultProps = { theme }

export default Span

import styled from 'styled-components'
import DefaultTheme from '../themes/DefaultTheme'

/**
 * Renders a `code` block
 */
export const Code = styled.code`
  font-size: ${props =>
    props.fontSize ? props.fontSize : props.theme.typography.fontSize};
  font-family: ${props => props.theme.typography.fontFamily};
`

Code.defaultProps = { theme: DefaultTheme }

export default Code

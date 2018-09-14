import styled from 'styled-components'
import presets from '../utils/presets'
import DefaultTheme from '../themes/DefaultTheme'

/**
 * A Container limits it's content to a maximum width.
 */
export const Container = styled.div`
  display: block;
  font-family: ${props => props.theme.fontFamily};
  margin: 0 auto;
  max-width: 960px;

  /* Mobile */
  @media only screen and (max-width: 767px) {
    width: auto;
    margin-left: 1em;
    margin-right: 1em;
  }

  /* Tablet */
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 723px;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  /* Small Monitor */
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    width: 933px;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  /* Large Monitor */
  @media only screen and (min-width: 1200px) {
    width: 1127px;
    margin-left: auto !important;
    margin-right: auto !important;
  }
`

Container.defaultProps = {
  theme: DefaultTheme,
}

export default Container

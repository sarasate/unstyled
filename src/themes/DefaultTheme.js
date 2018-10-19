/* Basic theme with minimal styling. Nearly unstyled.*/
require('typeface-open-sans')

const DefaultTheme = {
  color: {
    primary: 'rebeccapurple',
    secondary: '#587291',
    success: '#59B655',
    alert: '#CA3B33',
    warning: '#F3BE43',
    info: '#3E85CA',
  },
  typography: {
    fontColor: 'rgba(0, 0, 0, 0.84)',
    fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',
    fontSize: 'inherited',
    fontWeight: 400,
    lineHeight: '1rem',
  },
  heading: {
    fontSize: '1.6rem',
    fontWeight: 'normal',
  },
  //  @deprecated: These will be used in theme props themselves
  fontFamily:
    'Open Sans,-apple-system,BlinkMacSystemFont,Source Sans Pro,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif',
  fontWeight: 400,
  fontColor: 'rgba(0, 0, 0, 0.84)',
  fontSize: 'inherited',
  headingFontWeight: 600,
  primaryColor: 'rgba(0,0,0,.6)',
  secondaryColor: '#f8f8f9',
  codeFont:
    'Space Mono,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace',
  red: '#DB2828',
  orange: '#F2711C',
  yellow: '#FBBD08',
  olive: '#B5CC18',
  green: '#21BA45',
  teal: '#00B5AD',
  blue: '#2185D0',
  violet: '#6435C9',
  purple: '#A333C8',
  pink: '#E03997',
  brown: '#A5673F',
  grey: '#E8E8E8',
  black: '#1B1C1D',
}

export default DefaultTheme

/* Basic theme with minimal styling. Nearly unstyled.*/
require('typeface-lato')

const DefaultTheme = {
  color: {
    primary: 'rebeccapurple',
    secondary: '#587291',
    success: '#59B655',
    alert: '#CA3B33',
    warning: '#F3BE43',
    info: '#3E85CA',
    grey: '#E8E8E8',
  },
  typography: {
    fontColor: 'rgba(0, 0, 0, 0.84)',
    fontFamily: 'Lato,Open Sans,Helvetica,Arial,sans-serif',
    fontSize: 'inherited',
    fontWeight: 400,
    lineHeight: '1rem',
  },
  heading: {
    fontSize: '1.6rem',
    fontWeight: 600,
  },
}

export default DefaultTheme

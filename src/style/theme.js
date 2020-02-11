import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#003791' },
    secondary: { main: '#FF4B5F' },
  },
  overrides: {
    MuiButton: {
      root: {
        paddingTop: '11px',
        paddingBottom: '11px',
        fontFamily: '"Bebas", "Roboto", "Helvetica", "Arial", sans-serif',
        letterSpacing: '1px',
        fontSize: '20px',
      },
      contained: {
        boxShadow: 'none',
      },
      containedSecondary: {
        '&:hover': {
          backgroundColor: '#EC3449',
        },
      },
    },
  },
});

export default theme;

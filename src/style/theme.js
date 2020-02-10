import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#003791' },
    secondary: { main: '#FF4B5F' },
  },
  overrides: {
    MuiButton: {
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

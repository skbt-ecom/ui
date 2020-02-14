import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    text: {
      primary: '#fff',
    },
    primary: {
      main: '#fff',
    },
    secondary: { main: '#FF4B5F' },
  },
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      textPrimary: {
        // Some CSS
        background: '#003791',
        '@media (hover: none)': {
          backgroundColor: 'rgb(0, 38, 101) !important',
        },
        '&:hover': {
          backgroundColor: 'rgb(0, 38, 101)',
        },
      },
    },
  },
});

export default theme;

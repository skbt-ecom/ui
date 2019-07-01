import { createMuiTheme } from '@material-ui/core/styles';
import { bebas } from './fonts';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 767,
      md: 991,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: { main: '#003791' },
    secondary: { main: '#FF4B5F' },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [bebas],
      },
    },
  },
});

export default theme;

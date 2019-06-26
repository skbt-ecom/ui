import { createMuiTheme } from '@material-ui/core/styles';
import { bebas } from './fonts';

const theme = createMuiTheme({
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

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  // typography: {
  //   fontFamily: [
  //     'Bebas',
  //     '-apple-system',
  //     'BlinkMacSystemFont',
  //     '"Segoe UI"',
  //     'Roboto',
  //     '"Helvetica Neue"',
  //     'Arial',
  //     'sans-serif',
  //     '"Apple Color Emoji"',
  //     '"Segoe UI Emoji"',
  //     '"Segoe UI Symbol"',
  //   ].join(','),
  // },
  // typography: {
  //   // fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans - serif'].join(','),
  //   fontFamily: ['Bebas', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  // },
  palette: {
    primary: { main: '#003791' },
    secondary: { main: '#FF4B5F' },
  },
});

export default theme;

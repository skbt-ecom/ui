import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  props: {
    MuiButton: {
      color: 'primary',
    },
  },
  overrides: {
    // MuiTextField: {
    //   root: {
    //     minHeight: 78,
    //   },
    // },
    MuiButton: {
      root: {
        paddingTop: 10.5,
        paddingBottom: 10.5,
        fontFamily:
          'Bebas, Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        letterSpacing: 1,
        fontSize: 20,
      },
      outlined: {
        paddingTop: 11,
        paddingBottom: 11,
      },
      contained: {
        boxShadow: 'none',
      },
    },
  },
});

export default theme;

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var theme = (0, _styles.createMuiTheme)({
  palette: {
    type: 'dark',
    text: {
      primary: '#fff'
    },
    primary: {
      main: '#fff'
    },
    secondary: {
      main: '#FF4B5F'
    }
  },
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      root: {
        paddingTop: '11px',
        paddingBottom: '11px',
        fontFamily: '"Bebas", "Roboto", "Helvetica", "Arial", sans-serif',
        letterSpacing: '1px',
        fontSize: '20px'
      },
      contained: {
        boxShadow: 'none'
      },
      // Name of the rule
      textPrimary: {
        // Some CSS
        background: '#003791',
        '@media (hover: none)': {
          backgroundColor: 'rgb(0, 38, 101) !important'
        },
        '&:hover': {
          backgroundColor: 'rgb(0, 38, 101)'
        },
        '&$disabled': {
          backgroundColor: '#232323',
          color: '#6b6b6b'
        }
      }
    }
  }
});
var _default = theme;
exports["default"] = _default;
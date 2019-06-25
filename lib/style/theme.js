"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var theme = (0, _styles.createMuiTheme)({
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
    primary: {
      main: '#003791'
    },
    secondary: {
      main: '#FF4B5F'
    }
  }
});
var _default = theme;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var _fonts = require("./fonts");

var theme = (0, _styles.createMuiTheme)({
  breakpoints: {
    values: {
      xs: 0,
      sm: 767,
      md: 992,
      lg: 1280,
      xl: 1920
    }
  },
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
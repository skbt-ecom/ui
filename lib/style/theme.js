"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var _fonts = require("./fonts");

var theme = (0, _styles.createMuiTheme)({
  palette: {
    primary: {
      main: '#003791'
    },
    secondary: {
      main: '#FF4B5F'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [_fonts.bebas]
      }
    }
  }
});
var _default = theme;
exports["default"] = _default;
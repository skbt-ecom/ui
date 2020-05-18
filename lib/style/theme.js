"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

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
      containedSecondary: {
        '&:hover': {
          backgroundColor: '#EC3449'
        }
      }
    }
  }
});
var _default = theme;
exports["default"] = _default;
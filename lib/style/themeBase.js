"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var theme = (0, _styles.createMuiTheme)({
  props: {
    MuiButton: {
      color: 'primary'
    }
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
        fontFamily: 'Bebas, Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        letterSpacing: 1,
        fontSize: 20
      },
      outlined: {
        paddingTop: 11,
        paddingBottom: 11
      },
      contained: {
        boxShadow: 'none'
      }
    }
  }
});
var _default = theme;
exports["default"] = _default;
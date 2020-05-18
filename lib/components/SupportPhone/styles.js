"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    phoneContainer: {
      fontFamily: '"Roboto", Arial, Helvetica, sans-serif',
      color: '#a1afbf'
    },
    phoneNum: (0, _defineProperty2["default"])({
      fontWeight: 500,
      fontSize: 20,
      color: '#607289',
      textDecoration: 'none',
      lineHeight: '22px'
    }, theme.breakpoints.up('md'), {
      fontSize: 23
    }),
    phoneHint: (0, _defineProperty2["default"])({
      margin: 0,
      fontSize: 9,
      fontWeight: 400,
      lineHeight: '12px',
      letterSpacing: '0.05px'
    }, theme.breakpoints.up('md'), {
      letterSpacing: '0.2px',
      fontSize: 10
    }),
    buttonRoot: (0, _defineProperty2["default"])({
      padding: '8px 20px'
    }, theme.breakpoints.up('sm'), {
      display: 'none'
    }),
    buttonLabel: {
      fontSize: 16,
      lineHeight: '20px'
    }
  };
});
var _default = useStyles;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    phoneContainer: _defineProperty({
      fontFamily: '"Roboto", Arial, Helvetica, sans-serif',
      fontWeight: 400,
      fontSize: '9px',
      color: '#a1afbf',
      lineHeight: '12px',
      display: 'none'
    }, theme.breakpoints.up('sm'), {
      display: 'block'
    }),
    phoneNum: {
      fontWeight: 500,
      fontSize: '20px',
      color: '#607289',
      textDecoration: 'none',
      lineHeight: '22px'
    },
    phoneHint: {
      margin: 0,
      fontWeight: 400
    },
    buttonRoot: _defineProperty({
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
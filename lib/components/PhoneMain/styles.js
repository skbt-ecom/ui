"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    phoneContainer: {
      fontFamily: '"Roboto", Arial, Helvetica, sans-serif',
      color: '#a1afbf'
    },
    phoneMultiple: _defineProperty({
      marginBottom: 4,
      fontSize: 16,
      lineHeight: '16px'
    }, theme.breakpoints.up('md'), {
      fontSize: 20,
      lineHeight: '20px'
    }),
    phoneHint: _defineProperty({
      margin: 0,
      fontSize: 9,
      fontWeight: 400,
      lineHeight: '12px',
      letterSpacing: '0.05px'
    }, theme.breakpoints.up('md'), {
      letterSpacing: '0.2px',
      fontSize: 10
    }),
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
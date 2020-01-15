"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    phoneNum: _defineProperty({
      fontWeight: 500,
      fontSize: 20,
      color: '#607289',
      textDecoration: 'none',
      lineHeight: '22px',
      display: 'block'
    }, theme.breakpoints.up('md'), {
      fontSize: 23,
      lineHeight: '23px'
    })
  };
});
var _default = useStyles;
exports["default"] = _default;
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
    phoneNum: (0, _defineProperty2["default"])({
      fontWeight: 500,
      fontSize: 20,
      color: '#607289',
      textDecoration: 'none',
      lineHeight: '22px',
      display: 'block'
    }, theme.breakpoints.up('md'), {
      fontSize: 23
    })
  };
});
var _default = useStyles;
exports["default"] = _default;
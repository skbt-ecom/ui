"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _styles = require("@material-ui/core/styles");

function styles(theme) {
  return {
    root: (0, _defineProperty2["default"])({
      boxSizing: 'border-box',
      margin: '0 auto',
      boxShadow: '0 10px 34px rgba(0, 0, 0, 0.2)',
      borderRadius: 8,
      backgroundColor: '#fff',
      width: 272,
      height: 304,
      padding: '36px 32px'
    }, theme.breakpoints.up('md'), {
      width: 528,
      height: 336,
      padding: '44px 42px'
    })
  };
}

var _default = (0, _styles.makeStyles)(styles);

exports["default"] = _default;
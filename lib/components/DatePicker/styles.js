"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function styles(theme) {
  return {
    root: _defineProperty({
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
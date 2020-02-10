"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  var _logo;

  return {
    logo: (_logo = {
      height: '16px'
    }, _defineProperty(_logo, theme.breakpoints.up('sm'), {
      height: '20px'
    }), _defineProperty(_logo, theme.breakpoints.up('md'), {
      height: '24px'
    }), _logo)
  };
});
var _default = useStyles;
exports["default"] = _default;
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
  var _logo;

  return {
    logo: (_logo = {
      height: '16px'
    }, (0, _defineProperty2["default"])(_logo, theme.breakpoints.up('sm'), {
      height: '20px'
    }), (0, _defineProperty2["default"])(_logo, theme.breakpoints.up('md'), {
      height: '24px'
    }), _logo)
  };
});
var _default = useStyles;
exports["default"] = _default;
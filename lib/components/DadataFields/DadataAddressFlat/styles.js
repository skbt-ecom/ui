"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.useStylesFlatInfo = exports.useStylesAddressDadata = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _styles = require("@material-ui/core/styles");

var useStylesAddressDadata = (0, _styles.makeStyles)({
  container: {
    marginBottom: 10
  }
});
exports.useStylesAddressDadata = useStylesAddressDadata;
var useStylesFlatInfo = (0, _styles.makeStyles)(function (theme) {
  return {
    checkbox: {
      marginTop: 8
    },
    checkboxLabel: (0, _defineProperty2["default"])({
      fontSize: 13
    }, theme.breakpoints.up('sm'), {
      fontSize: 16
    }),
    flatField: (0, _defineProperty2["default"])({
      marginRight: 24,
      width: 128
    }, theme.breakpoints.up('sm'), {
      marginRight: 32,
      width: 176
    }),
    container: {
      display: 'flex',
      alignItems: 'flex-start'
    }
  };
});
exports.useStylesFlatInfo = useStylesFlatInfo;
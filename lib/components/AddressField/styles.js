"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStylesFlatInfo = exports.useStylesAddressDadata = void 0;

var _styles = require("@material-ui/core/styles");

var useStylesAddressDadata = (0, _styles.makeStyles)({
  container: {
    marginBottom: 10
  }
});
exports.useStylesAddressDadata = useStylesAddressDadata;
var useStylesFlatInfo = (0, _styles.makeStyles)({
  checkbox: {
    marginTop: 8
  },
  flatField: {
    marginRight: 30
  },
  container: {
    display: 'flex',
    alignItems: 'flex-start'
  }
}, {
  index: 0
});
exports.useStylesFlatInfo = useStylesFlatInfo;
"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.useFlatInfoStyles = exports.useAddressDadataStyles = void 0;

var _styles = require("@material-ui/core/styles");

var useAddressDadataStyles = (0, _styles.makeStyles)({
  container: {
    marginBottom: 10
  }
});
exports.useAddressDadataStyles = useAddressDadataStyles;
var useFlatInfoStyles = (0, _styles.makeStyles)({
  container: {
    alignItems: 'flex-start'
  },
  checkbox: {
    marginTop: 8
  }
}, {
  index: 1
});
exports.useFlatInfoStyles = useFlatInfoStyles;
"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)({
  fieldWrapper: {
    minHeight: 78,
    marginBottom: 10
  },
  fieldWrapperAcceptment: {
    minHeight: 'auto',
    marginBottom: 10
  }
});
var _default = useStyles;
exports["default"] = _default;
"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      minHeight: function minHeight(props) {
        return props.minHeight || 78;
      }
    }
  };
});
var _default = useStyles;
exports["default"] = _default;
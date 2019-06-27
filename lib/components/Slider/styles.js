"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    container: {
      position: 'relative',
      width: '100%'
    },
    input: {},
    slider: {
      position: 'absolute',
      bottom: '-11px',
      left: 0
    }
  };
});
var _default = useStyles;
exports["default"] = _default;
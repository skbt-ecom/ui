"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)({
  root: {
    boxShadow: 'none',
    borderLeft: 0,
    borderRight: 0,
    borderBottom: '1px solid #E1E7EC',
    '&:first-child': {
      borderTop: '1px solid #E1E7EC',
      borderRadius: 0
    },
    '&:last-child': {
      borderRadius: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      marginBottom: 0,
      marginTop: 0
    }
  },
  expanded: {}
});
var _default = useStyles;
exports["default"] = _default;
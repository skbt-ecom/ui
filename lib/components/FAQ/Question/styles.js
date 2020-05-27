"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)({
  root: {
    padding: 0,
    minHeight: 24,
    '&$expanded': {
      minHeight: 24
    }
  },
  content: {
    margin: '30px 0',
    '&$expanded': {
      margin: '30px 0 24px'
    }
  },
  expanded: {},
  expandIcon: {
    padding: '0 3px',
    marginRight: -7
  },
  text: {
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '20px',
    padding: 0,
    margin: 0
  }
});
var _default = useStyles;
exports["default"] = _default;
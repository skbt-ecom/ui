"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)({
  root: {
    '&:hover': {
      boxShadow: 'none'
    },
    '& span:nth-of-type(1)': {
      '@media not all and (min-resolution:.001dpcm)': {
        '@media': {
          marginTop: '1%',
          marginBottom: '-2%'
        }
      }
    }
  },
  label: {}
});
var _default = useStyles;
exports["default"] = _default;
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
      width: '100%' // minHeight: 76, maybe use withSpaceForHelperTxt HOC

    },
    input: {
      fontWeight: 500,
      fontSize: 18,
      '& .MuiInputBase-root': {
        fontSize: 'inherit'
      }
    },
    sliderRoot: {
      position: 'absolute',
      bottom: -11,
      // -11 => if minHeight === 76
      left: 0,
      '@media (pointer: coarse)': {
        bottom: -20
      }
    },
    sliderMarkLabel: {
      '&:nth-child(5)': {
        transform: 'none'
      },
      '&:nth-last-child(2)': {
        transform: 'none',
        right: '0 !important',
        left: 'auto !important'
      }
    }
  };
});
var _default = useStyles;
exports["default"] = _default;
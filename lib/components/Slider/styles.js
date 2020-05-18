"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function () {
  return {
    container: {
      position: 'relative',
      width: '100%'
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
      // input.height - (slider.height/2 + 1)
      top: 58.38 - 13,
      left: 0,
      padding: '11px 0' // '@media (pointer: coarse)': {
      //   bottom: props => (props.withSpaceForHelperTxt ? -2 : -20),
      // },

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
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
    input: {
      fontWeight: 500,
      fontSize: '18px',
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          border: 0
        }
      },
      '& .MuiInputBase-root': {
        fontSize: 'inherit'
      }
    },
    sliderRoot: {
      position: 'absolute',
      bottom: function bottom(props) {
        return props.discrete ? '-31px' : '-11px';
      },
      left: 0
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
    },
    sliderMark: {
      visibility: function visibility(props) {
        return props.discrete ? 'hidden' : 'visible';
      }
    }
  };
});
var _default = useStyles;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  var _label, _box;

  return {
    label: (_label = {
      marginRight: '8px'
    }, _defineProperty(_label, theme.breakpoints.up('md'), {
      marginRight: '28px'
    }), _defineProperty(_label, '&:last-of-type', {
      marginRight: 0
    }), _label),
    input: {
      display: 'none',
      '&:checked': {
        '& + div': {
          backgroundColor: theme.palette.primary.main,
          '& span': {
            color: '#fff',
            '&:before': {
              opacity: 1
            }
          }
        }
      }
    },
    box: (_box = {
      width: '48px',
      height: '48px',
      border: '1px solid #d2dce3',
      borderRadius: '4px',
      transition: 'all 250ms ease',
      willChange: 'transition',
      display: 'inline-block',
      textAlign: 'center',
      cursor: 'pointer',
      position: 'relative',
      marginBottom: '15px'
    }, _defineProperty(_box, theme.breakpoints.up('sm'), {
      width: '56px'
    }), _defineProperty(_box, theme.breakpoints.up('md'), {
      width: '64px'
    }), _defineProperty(_box, theme.breakpoints.up('lg'), {
      width: '112px'
    }), _defineProperty(_box, '& span', _defineProperty({
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      left: 0,
      right: 0,
      transition: 'all 300ms ease',
      userSelect: 'none',
      fontFamily: theme.typography.fontFamily,
      fontSize: '8px'
    }, theme.breakpoints.up('sm'), {
      fontSize: '10px'
    })), _box)
  };
});
var _default = useStyles;
exports["default"] = _default;
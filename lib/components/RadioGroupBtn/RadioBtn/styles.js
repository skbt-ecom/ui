"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  var _label, _span, _box;

  return {
    label: (_label = {
      marginRight: '8px'
    }, (0, _defineProperty2["default"])(_label, theme.breakpoints.up('md'), {
      marginRight: '28px'
    }), (0, _defineProperty2["default"])(_label, '&:last-of-type', {
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
    }, (0, _defineProperty2["default"])(_box, theme.breakpoints.up('sm'), {
      width: '56px'
    }), (0, _defineProperty2["default"])(_box, theme.breakpoints.up('md'), {
      width: '64px'
    }), (0, _defineProperty2["default"])(_box, theme.breakpoints.up('lg'), {
      width: '112px'
    }), (0, _defineProperty2["default"])(_box, '& span', (_span = {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      left: 0,
      right: 0,
      transition: 'all 300ms ease',
      userSelect: 'none',
      fontFamily: theme.typography.fontFamily,
      fontSize: '8px'
    }, (0, _defineProperty2["default"])(_span, theme.breakpoints.up('sm'), {
      fontSize: '10px'
    }), (0, _defineProperty2["default"])(_span, theme.breakpoints.up('lg'), {
      fontSize: '16px'
    }), _span)), _box)
  };
});
var _default = useStyles;
exports["default"] = _default;
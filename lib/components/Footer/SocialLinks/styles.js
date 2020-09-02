"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _styles = require("@material-ui/core/styles");

function styles(theme) {
  return {
    social: (0, _defineProperty2["default"])({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 43
    }, theme.breakpoints.up('sm'), {
      marginBottom: 29,
      paddingRight: function paddingRight(props) {
        return props.paddingRight;
      }
    }),
    link: (0, _defineProperty2["default"])({
      textAlign: 'center',
      '& svg': {
        display: 'inline-block',
        fill: theme.name === 'halva' ? '#979797' : '#a1afbf',
        width: 27,
        height: 25
      }
    }, theme.breakpoints.up('sm'), {
      '& svg': {
        width: 16,
        height: 14
      }
    })
  };
}

var _default = (0, _styles.makeStyles)(styles);

exports["default"] = _default;
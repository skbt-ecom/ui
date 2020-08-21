"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

function styles(theme) {
  var color = theme.name === 'halva' ? '#979797' : '#a1afbf';
  return {
    store: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '24px 0'
    },
    link: {
      border: '1px solid ' + color,
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      color: color,
      textDecoration: 'none',
      fontSize: 13,
      width: 128,
      height: 40,
      paddingLeft: 10,
      '& svg': {
        fill: color,
        width: 22,
        height: 22
      },
      '& span': {
        paddingLeft: 7
      }
    }
  };
}

var _default = (0, _styles.makeStyles)(styles);

exports["default"] = _default;
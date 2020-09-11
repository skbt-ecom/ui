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
  var _link;

  var color = theme.name === 'halva' ? '#979797' : '#a1afbf';
  return {
    store: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '24px 0'
    },
    link: (_link = {
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
      '@media screen and (min-width: 360px)': {
        width: 152
      }
    }, (0, _defineProperty2["default"])(_link, theme.breakpoints.up('sm'), {
      width: 128
    }), (0, _defineProperty2["default"])(_link, '& svg', {
      fill: color,
      width: 22,
      height: 22
    }), (0, _defineProperty2["default"])(_link, '& span', {
      paddingLeft: 7
    }), _link)
  };
}

var _default = (0, _styles.makeStyles)(styles);

exports["default"] = _default;
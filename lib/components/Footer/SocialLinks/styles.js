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
  var _social, _link;

  return {
    social: (_social = {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 43
    }, (0, _defineProperty2["default"])(_social, theme.breakpoints.down('xs'), {
      justifyContent: 'center'
    }), (0, _defineProperty2["default"])(_social, theme.breakpoints.up('sm'), {
      marginBottom: 29
    }), _social),
    link: (_link = {
      textAlign: 'center',
      marginRight: 53,
      '& svg': {
        display: 'inline-block',
        fill: theme.name === 'halva' ? '#fff' : '#a1afbf',
        width: 27,
        height: 25
      }
    }, (0, _defineProperty2["default"])(_link, theme.breakpoints.up('sm'), {
      marginRight: 32,
      '& svg': {
        width: 16,
        height: 14
      }
    }), (0, _defineProperty2["default"])(_link, '&:last-of-type', {
      marginRight: 0
    }), _link)
  };
}

var _default = (0, _styles.makeStyles)(styles);

exports["default"] = _default;
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
  var _root;

  return {
    root: (_root = {
      textAlign: 'left',
      boxSizing: 'border-box',
      boxShadow: '0 10px 34px rgba(0, 0, 0, 0.2)',
      borderRadius: 8,
      backgroundColor: '#fff',
      minHeight: 304,
      padding: '36px 32px'
    }, (0, _defineProperty2["default"])(_root, theme.breakpoints.up('sm'), {
      margin: '0 auto',
      maxWidth: 400
    }), (0, _defineProperty2["default"])(_root, theme.breakpoints.up('md'), {
      maxWidth: 528,
      minHeight: 336,
      padding: '44px 42px'
    }), _root),
    head: (0, _defineProperty2["default"])({
      color: '#000',
      fontWeight: 700,
      letterSpacing: 0.5,
      fontSize: 24,
      lineHeight: '29px'
    }, theme.breakpoints.up('md'), {
      fontSize: 32,
      lineHeight: '39px'
    }),
    icon: (0, _defineProperty2["default"])({
      verticalAlign: 'top',
      width: 41
    }, theme.breakpoints.up('md'), {
      width: 47
    }),
    title: {
      color: '#000',
      fontSize: 16,
      lineHeight: '24px',
      padding: '38px 0 18px'
    },
    description: {
      color: '#607289',
      fontSize: 14,
      lineHeight: '21px',
      maxWidth: 265,
      '& > .errorMsg': {
        margin: 0,
        paddingLeft: 15,
        listStyleType: 'disc'
      },
      '& > .errorHint': (0, _defineProperty2["default"])({
        fontSize: 11,
        lineHeight: '18px',
        paddingTop: 15
      }, theme.breakpoints.up('md'), {
        paddingTop: 24
      })
    }
  };
}

var _default = (0, _styles.makeStyles)(styles);

exports["default"] = _default;
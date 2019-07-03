"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  var _container, _img;

  return {
    container: (_container = {
      backgroundColor: 'white',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '64px'
    }, _defineProperty(_container, theme.breakpoints.up('sm'), {
      height: '80px'
    }), _defineProperty(_container, theme.breakpoints.up('md'), {
      height: '104px'
    }), _container),
    logoContainer: {
      '& img': (_img = {
        height: '16px'
      }, _defineProperty(_img, theme.breakpoints.up('sm'), {
        height: '20px'
      }), _defineProperty(_img, theme.breakpoints.up('md'), {
        height: '24px'
      }), _img)
    },
    phoneContainer: _defineProperty({
      fontFamily: '"Roboto", Arial, Helvetica, sans-serif',
      fontWeight: 400,
      fontSize: '9px',
      color: '#a1afbf',
      lineHeight: '12px',
      display: 'none'
    }, theme.breakpoints.up('sm'), {
      display: 'block'
    }),
    phoneNum: {
      fontWeight: 500,
      fontSize: '20px',
      color: '#607289',
      textDecoration: 'none',
      lineHeight: '22px'
    },
    phoneHint: {
      margin: 0
    }
  };
});
var _default = useStyles;
exports["default"] = _default;
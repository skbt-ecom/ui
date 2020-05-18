"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.useButtonStyles = exports.usePhoneStyles = exports.useHeaderStyles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _styles = require("@material-ui/core/styles");

var useHeaderStyles = (0, _styles.makeStyles)(function (theme) {
  var _container;

  return {
    header: {
      backgroundColor: '#fff'
    },
    container: (_container = {
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '64px',
      minHeight: '64px'
    }, (0, _defineProperty2["default"])(_container, theme.breakpoints.up('sm'), {
      height: '80px',
      minHeight: '80px'
    }), (0, _defineProperty2["default"])(_container, theme.breakpoints.up('md'), {
      height: '104px',
      minHeight: '104px'
    }), (0, _defineProperty2["default"])(_container, '& img', {
      verticalAlign: 'top'
    }), _container)
  };
});
exports.useHeaderStyles = useHeaderStyles;
var usePhoneStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    phoneContainer: (0, _defineProperty2["default"])({
      display: 'none'
    }, theme.breakpoints.up('sm'), {
      display: 'block'
    }),
    phoneMultiple: (0, _defineProperty2["default"])({
      marginBottom: 4,
      fontSize: 16,
      lineHeight: '16px'
    }, theme.breakpoints.up('md'), {
      fontSize: 20,
      lineHeight: '20px'
    }),
    phoneNum: (0, _defineProperty2["default"])({
      fontWeight: 500,
      fontSize: 20,
      color: '#607289',
      textDecoration: 'none',
      lineHeight: '22px',
      display: 'block'
    }, theme.breakpoints.up('md'), {
      fontSize: 23
    }),
    phoneHint: (0, _defineProperty2["default"])({
      margin: 0,
      fontSize: 9,
      fontWeight: 400,
      lineHeight: '12px',
      letterSpacing: '0.05px'
    }, theme.breakpoints.up('md'), {
      letterSpacing: '0.2px',
      fontSize: 10
    })
  };
});
exports.usePhoneStyles = usePhoneStyles;
var useButtonStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: (0, _defineProperty2["default"])({
      padding: '8px 20px'
    }, theme.breakpoints.up('sm'), {
      display: 'none'
    }),
    label: {
      fontSize: 16,
      lineHeight: '20px'
    }
  };
}); // export default useStyles;

exports.useButtonStyles = useButtonStyles;
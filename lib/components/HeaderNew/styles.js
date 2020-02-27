"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useButtonStyles = exports.usePhoneStyles = exports.useHeaderStyles = void 0;

var _styles = require("@material-ui/core/styles");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    }, _defineProperty(_container, theme.breakpoints.up('sm'), {
      height: '80px',
      minHeight: '80px'
    }), _defineProperty(_container, theme.breakpoints.up('md'), {
      height: '104px',
      minHeight: '104px'
    }), _defineProperty(_container, '& img', {
      verticalAlign: 'top'
    }), _container)
  };
});
exports.useHeaderStyles = useHeaderStyles;
var usePhoneStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    phoneContainer: _defineProperty({
      display: 'none'
    }, theme.breakpoints.up('sm'), {
      display: 'block'
    }),
    phoneMultiple: _defineProperty({
      marginBottom: 4,
      fontSize: 16,
      lineHeight: '16px'
    }, theme.breakpoints.up('md'), {
      fontSize: 20,
      lineHeight: '20px'
    }),
    phoneNum: _defineProperty({
      fontWeight: 500,
      fontSize: 20,
      color: '#607289',
      textDecoration: 'none',
      lineHeight: '22px',
      display: 'block'
    }, theme.breakpoints.up('md'), {
      fontSize: 23
    }),
    phoneHint: _defineProperty({
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
    root: _defineProperty({
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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  var _footer, _store, _copyright, _social, _icon, _ligal;

  return {
    footer: (_footer = {
      fontFamily: '"Roboto", Arial, Helvetica, sans-serif',
      background: '#fff',
      padding: '40px 0'
    }, _defineProperty(_footer, theme.breakpoints.up('sm'), {
      padding: '64px 0'
    }), _defineProperty(_footer, '& img', {
      verticalAlign: 'middle'
    }), _footer),
    inner: _defineProperty({}, theme.breakpoints.up('md'), {
      display: 'flex'
    }),
    phone: _defineProperty({
      color: '#607289',
      fontSize: 23,
      fontWeight: 500,
      lineHeight: '22px',
      paddingBottom: 3
    }, theme.breakpoints.down('xs'), {
      textAlign: 'center'
    }),
    phoneHint: _defineProperty({
      color: '#a1afbf',
      fontSize: 10,
      letterSpacing: 0.2,
      lineHeight: '12px'
    }, theme.breakpoints.down('xs'), {
      textAlign: 'center'
    }),
    store: (_store = {}, _defineProperty(_store, theme.breakpoints.down('xs'), {
      justifyContent: 'center'
    }), _defineProperty(_store, theme.breakpoints.up('md'), {
      paddingRight: 32
    }), _defineProperty(_store, '& a', _defineProperty({
      display: 'inline-block'
    }, theme.breakpoints.up('md'), {
      display: 'block'
    })), _store),
    appstore: _defineProperty({
      marginRight: 8
    }, theme.breakpoints.up('md'), {
      marginRight: 0,
      marginBottom: 8
    }),
    copyright: (_copyright = {
      paddingBottom: 24,
      width: 296
    }, _defineProperty(_copyright, theme.breakpoints.down('xs'), {
      margin: '0 auto'
    }), _defineProperty(_copyright, theme.breakpoints.up('md'), {
      paddingBottom: 0
    }), _defineProperty(_copyright, '& p', {
      margin: 0,
      color: '#a1afbf',
      fontSize: 14,
      lineHeight: '20px',
      paddingBottom: 8,
      '&:last-of-type': {
        paddingBottom: 0
      }
    }), _copyright),
    social: (_social = {
      margin: '44px 0'
    }, _defineProperty(_social, theme.breakpoints.down('xs'), {
      justifyContent: 'center'
    }), _defineProperty(_social, theme.breakpoints.up('sm'), {
      margin: '32px 0 35px'
    }), _defineProperty(_social, theme.breakpoints.up('md'), {
      margin: '0 0 30px'
    }), _social),
    icon: (_icon = {
      textAlign: 'center',
      marginRight: 53
    }, _defineProperty(_icon, theme.breakpoints.up('sm'), {
      marginRight: 32
    }), _defineProperty(_icon, '&:last-of-type', {
      marginRight: 0
    }), _defineProperty(_icon, '& img', _defineProperty({}, theme.breakpoints.up('sm'), {
      maxWidth: 16,
      maxHeight: 14
    })), _icon),

    /**
     * Лигал
     */
    ligal: (_ligal = {
      color: '#a1afbf',
      fontSize: 11,
      lineHeight: '18px',
      paddingTop: 24
    }, _defineProperty(_ligal, theme.breakpoints.up('sm'), {
      fontSize: 12,
      paddingTop: 48
    }), _defineProperty(_ligal, theme.breakpoints.up('md'), {
      fontSize: 14,
      lineHeight: '20px',
      paddingTop: 40
    }), _ligal),
    showMore: {
      display: 'inline-block',
      borderBottom: '1px solid #607286',
      color: '#607286',
      fontSize: 12,
      paddingTop: 8,
      lineHeight: '20px',
      cursor: 'pointer'
    }
  };
});
var _default = useStyles;
exports["default"] = _default;
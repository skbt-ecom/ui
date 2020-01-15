"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function styles(theme) {
  var _footer, _copyright, _social, _icon;

  return {
    footer: (_footer = {
      fontFamily: theme.typography.fontFamily,
      fontWeight: 400,
      background: '#fff',
      padding: '40px 8px'
    }, _defineProperty(_footer, theme.breakpoints.up('sm'), {
      padding: '64px 24px'
    }), _defineProperty(_footer, '& img', {
      verticalAlign: 'middle'
    }), _footer),
    inner: _defineProperty({}, theme.breakpoints.up('sm'), {
      display: 'flex',
      justifyContent: 'space-between'
    }),
    phoneContainer: _defineProperty({
      flexGrow: 1,
      textAlign: 'center',
      marginBottom: 43
    }, theme.breakpoints.up('sm'), {
      textAlign: 'left',
      marginBottom: 0
    }),
    phoneNum: {
      fontSize: 23,
      lineHeight: '23px'
    },
    phoneHint: {
      fontSize: 10,
      letterSpacing: '0.2px'
    },
    store: _defineProperty({
      padding: '24px 0'
    }, theme.breakpoints.down('xs'), {
      justifyContent: 'space-between'
    }),
    copyright: (_copyright = {
      maxWidth: 272
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
      marginBottom: 43
    }, _defineProperty(_social, theme.breakpoints.down('xs'), {
      justifyContent: 'center'
    }), _defineProperty(_social, theme.breakpoints.up('sm'), {
      marginBottom: 29
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
    ligal: _defineProperty({
      color: '#a1afbf',
      fontSize: 11,
      lineHeight: '18px'
    }, theme.breakpoints.up('sm'), {
      fontSize: 12,
      paddingTop: 16
    }),
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
}

var _default = (0, _styles.makeStyles)(styles);

exports["default"] = _default;
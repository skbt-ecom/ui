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
  var _footer, _copyright;

  var isHalva = theme.name === 'halva';
  var color = isHalva ? '#979797' : '#a1afbf';
  return {
    footer: (_footer = {
      fontFamily: theme.typography.fontFamily,
      fontWeight: 400,
      background: '#fff',
      padding: '40px 8px'
    }, (0, _defineProperty2["default"])(_footer, theme.breakpoints.up('sm'), {
      padding: '64px 24px'
    }), (0, _defineProperty2["default"])(_footer, '& img', {
      verticalAlign: 'middle'
    }), _footer),
    inner: (0, _defineProperty2["default"])({}, theme.breakpoints.up('sm'), {
      display: 'flex',
      justifyContent: 'space-between'
    }),
    phoneContainer: (0, _defineProperty2["default"])({
      color: color,
      flexGrow: 1,
      textAlign: 'center',
      marginBottom: 43
    }, theme.breakpoints.up('sm'), {
      textAlign: 'left',
      marginBottom: 0
    }),
    phoneNum: {
      color: isHalva ? '#757575' : '#607289',
      fontSize: 23,
      lineHeight: '23px'
    },
    phoneMultiple: {
      fontSize: 23,
      lineHeight: '23px',
      marginBottom: 8
    },
    phoneHint: {
      fontSize: 10,
      letterSpacing: '0.2px',
      margin: 0
    },
    copyright: (_copyright = {
      maxWidth: 272
    }, (0, _defineProperty2["default"])(_copyright, theme.breakpoints.down('xs'), {
      margin: '0 auto'
    }), (0, _defineProperty2["default"])(_copyright, theme.breakpoints.up('md'), {
      paddingBottom: 0
    }), (0, _defineProperty2["default"])(_copyright, '& p', {
      margin: 0,
      color: color,
      fontSize: 14,
      lineHeight: '20px',
      paddingBottom: 8,
      '&:last-of-type': {
        paddingBottom: 0
      }
    }), _copyright),

    /**
     * Лигал
     */
    ligal: (0, _defineProperty2["default"])({
      color: color,
      fontSize: 11,
      lineHeight: '18px'
    }, theme.breakpoints.up('sm'), {
      fontSize: 12,
      paddingTop: 16
    }),
    showMore: {
      display: 'inline-block',
      borderBottom: '1px solid ' + (isHalva ? color : '#607286'),
      color: isHalva ? '#757575' : '#607286',
      fontSize: 12,
      paddingTop: 8,
      lineHeight: '20px',
      cursor: 'pointer'
    }
  };
}

var _default = (0, _styles.makeStyles)(styles);

exports["default"] = _default;
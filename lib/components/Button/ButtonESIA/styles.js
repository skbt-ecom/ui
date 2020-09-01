"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  var _root;

  return {
    buttonContainer: {// display: 'inline-block',
    },
    bwtContainer: (0, _defineProperty2["default"])({
      display: 'none',
      boxSizing: 'border-box',
      borderRadius: 4,
      backgroundColor: '#f2f8fc',
      padding: '12px 16px',
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      display: 'flex',
      justifyContent: 'space-between'
    }),
    bwtLeft: {
      display: 'flex'
    },
    bwtText: {
      fontFamily: '"Roboto", Arial, Helvetica, sans-serif',
      fontSize: 12,
      lineHeight: '17px',
      color: '#607286',
      padding: '0 18px',
      '& strong': {
        color: '#292929'
      }
    },
    bwtButton: {
      fontFamily: '"Roboto", Arial, Helvetica, sans-serif',
      fontSize: 12,
      lineHeight: '14px',
      color: '#0a40b3',
      backgroundColor: '#fff',
      border: '1px solid #0a40b3',
      borderRadius: 4,
      padding: '9px 28px',
      cursor: 'pointer',
      outline: 0,
      transition: '.3s',
      '&:hover': {
        backgroundColor: '#0a40b3',
        color: '#fff',
        borderColor: '#0a40b3'
      }
    },
    root: (_root = {}, (0, _defineProperty2["default"])(_root, theme.breakpoints.up('sm'), {
      display: 'none'
    }), (0, _defineProperty2["default"])(_root, "padding", '12px 24px 12px 17px'), (0, _defineProperty2["default"])(_root, "borderRadius", 4), (0, _defineProperty2["default"])(_root, "border", '1px solid transparent'), (0, _defineProperty2["default"])(_root, "backgroundColor", '#f2f8fc'), (0, _defineProperty2["default"])(_root, '&:hover', {
      backgroundColor: '#f2f8fc',
      borderColor: 'transparent'
    }), (0, _defineProperty2["default"])(_root, '&:active', {
      border: '1px solid #b6ccdb',
      backgroundColor: '#e7f0f6'
    }), _root),
    label: {
      fontFamily: '"Roboto", Arial, Helvetica, sans-serif',
      fontSize: 12,
      fontWeight: 400,
      textTransform: 'none',
      color: '#0a40b3' // color: props => (props.disabled ? '#a1afbf' : '#607286'),

    },
    startIcon: {
      marginRight: 18
    },
    descrBlock: {
      display: 'flex',
      marginTop: 16,
      alignItems: 'center'
    },
    descrText: {
      fontSize: 10,
      lineHeight: '12px',
      fontWeight: 300,
      color: '#607286',
      width: 208,
      margin: 0
    },
    secureIcon: {
      paddingTop: 4,
      paddingLeft: 16,
      paddingRight: 24
    }
  };
});
var _default = useStyles;
exports["default"] = _default;
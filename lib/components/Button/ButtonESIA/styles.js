"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  var _root;

  return {
    buttonContainer: {
      display: 'inline-block'
    },
    bwtContainer: _defineProperty({
      display: 'none',
      borderRadius: 4,
      backgroundColor: '#f2f8fc',
      padding: '12px 16px',
      width: 504
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
      margin: '0 0 0 18px',
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
    root: (_root = {}, _defineProperty(_root, theme.breakpoints.up('sm'), {
      display: 'none'
    }), _defineProperty(_root, "padding", '12px 24px 12px 17px'), _defineProperty(_root, "borderRadius", 4), _defineProperty(_root, "border", '1px solid transparent'), _defineProperty(_root, "backgroundColor", '#f2f8fc'), _defineProperty(_root, '&:hover', {
      backgroundColor: '#f2f8fc',
      borderColor: 'transparent'
    }), _defineProperty(_root, '&:active', {
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
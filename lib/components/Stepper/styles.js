"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function styles(theme) {
  var w = 32;
  var ml = w / 2;
  var pr = 16;
  var color = '#a1afbf';
  return {
    stepper: {
      padding: 0
    },
    iconContainer: _defineProperty({
      paddingRight: 0,
      marginRight: 8,
      '&>svg': {
        color: color
      }
    }, theme.breakpoints.up('sm'), {
      width: w,
      height: w,
      marginRight: pr,
      '&>svg': {
        width: '100%',
        height: '100%'
      }
    }),
    label: _defineProperty({
      fontSize: 16
    }, theme.breakpoints.up('sm'), {
      fontSize: 18
    }),
    content: _defineProperty({
      color: '#607286',
      lineHeight: 1.5,
      fontFamily: theme.typography.fontFamily,
      fontSize: 11,
      borderColor: color
    }, theme.breakpoints.up('sm'), {
      fontSize: 14,
      paddingLeft: w + pr - ml,
      marginLeft: ml
    }),
    connector: _defineProperty({
      borderLeft: '1px solid ' + color,
      marginBottom: 8,
      minHeight: 24,
      marginLeft: 12
    }, theme.breakpoints.up('sm'), {
      marginLeft: ml
    })
  };
}

var _default = (0, _styles.makeStyles)(styles);

exports["default"] = _default;
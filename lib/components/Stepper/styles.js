"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function styles(theme) {
  var _iconContainerHorizon, _labelHorizontal;

  var w = 32;
  var ml = w / 2;
  var pr = 16;
  var color = '#a1afbf';
  return {
    stepper: {
      padding: 0,
      fontFamily: theme.typography.fontFamily,
      background: 'transparent',
      '& > div': _defineProperty({
        display: 'none'
      }, theme.breakpoints.up('sm'), {
        display: 'block'
      }),
      '& div:first-child': {
        display: 'block'
      }
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
    iconContainerHorizontal: (_iconContainerHorizon = {}, _defineProperty(_iconContainerHorizon, theme.breakpoints.up('sm'), {
      width: 28,
      height: 28
    }), _defineProperty(_iconContainerHorizon, theme.breakpoints.up('md'), {
      width: w,
      height: w
    }), _iconContainerHorizon),
    labelVertical: _defineProperty({
      fontSize: 16
    }, theme.breakpoints.up('sm'), {
      fontSize: 18
    }),
    labelHorizontal: (_labelHorizontal = {
      fontSize: 16
    }, _defineProperty(_labelHorizontal, theme.breakpoints.up('sm'), {
      fontSize: 11
    }), _defineProperty(_labelHorizontal, theme.breakpoints.up('md'), {
      fontSize: 20
    }), _labelHorizontal),
    contentVertical: _defineProperty({
      color: '#607286',
      lineHeight: 1.5,
      fontSize: 11,
      borderColor: color
    }, theme.breakpoints.up('sm'), {
      fontSize: 14,
      paddingLeft: w + pr - ml
    }),
    contentHorizontal: _defineProperty({
      color: '#607286',
      lineHeight: 1.5,
      fontSize: 12
    }, theme.breakpoints.up('md'), {
      fontSize: 14
    }),
    connectorVertical: _defineProperty({
      borderLeft: 0,
      // borderLeft: '1px solid ' + color,
      marginBottom: 8,
      minHeight: 30,
      marginLeft: 12
    }, theme.breakpoints.up('sm'), {
      marginLeft: ml,
      minHeight: 50
    }),
    connectorHorizontal: _defineProperty({
      // borderTop: '1px solid ' + color,
      justifyContent: 'center',
      flex: '1 1 auto',
      margin: '0 3px'
    }, theme.breakpoints.up('sm'), {
      justifyContent: 'normal'
    }),
    connectorActive: {
      '& + div': {
        display: 'block'
      }
    },
    hideXs: _defineProperty({
      display: 'none !important'
    }, theme.breakpoints.up('sm'), {
      display: 'block !important'
    }),
    connectorDisabled: {}
  };
}

var _default = (0, _styles.makeStyles)(styles);

exports["default"] = _default;
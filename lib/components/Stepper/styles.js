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
      '& > div': (0, _defineProperty2["default"])({
        display: 'none'
      }, theme.breakpoints.up('sm'), {
        display: 'block'
      }),
      '& div:first-child': {
        display: 'block'
      }
    },
    iconContainer: (0, _defineProperty2["default"])({
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
    iconContainerHorizontal: (_iconContainerHorizon = {}, (0, _defineProperty2["default"])(_iconContainerHorizon, theme.breakpoints.up('sm'), {
      width: 28,
      height: 28
    }), (0, _defineProperty2["default"])(_iconContainerHorizon, theme.breakpoints.up('md'), {
      width: w,
      height: w
    }), _iconContainerHorizon),
    labelVertical: (0, _defineProperty2["default"])({
      fontSize: 16
    }, theme.breakpoints.up('sm'), {
      fontSize: 18
    }),
    labelHorizontal: (_labelHorizontal = {
      fontSize: 16
    }, (0, _defineProperty2["default"])(_labelHorizontal, theme.breakpoints.up('sm'), {
      fontSize: 11
    }), (0, _defineProperty2["default"])(_labelHorizontal, theme.breakpoints.up('md'), {
      fontSize: 20
    }), _labelHorizontal),
    contentVertical: (0, _defineProperty2["default"])({
      color: '#607286',
      lineHeight: 1.5,
      fontSize: 11,
      borderColor: color
    }, theme.breakpoints.up('sm'), {
      fontSize: 14,
      paddingLeft: w + pr - ml
    }),
    contentHorizontal: (0, _defineProperty2["default"])({
      color: '#607286',
      lineHeight: 1.5,
      fontSize: 12
    }, theme.breakpoints.up('md'), {
      fontSize: 14
    }),
    connectorVertical: (0, _defineProperty2["default"])({
      borderLeft: 0,
      // borderLeft: '1px solid ' + color,
      marginBottom: 8,
      minHeight: 30,
      marginLeft: 12
    }, theme.breakpoints.up('sm'), {
      marginLeft: ml,
      minHeight: 50
    }),
    connectorHorizontal: (0, _defineProperty2["default"])({
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
    hideXs: (0, _defineProperty2["default"])({
      display: 'none !important'
    }, theme.breakpoints.up('sm'), {
      display: 'block !important'
    }),
    connectorDisabled: {}
  };
}

var _default = (0, _styles.makeStyles)(styles);

exports["default"] = _default;
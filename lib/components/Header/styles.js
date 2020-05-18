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
  var _container, _logo, _halvaLogo;

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
    }), _container),
    logo: (_logo = {
      height: '16px'
    }, (0, _defineProperty2["default"])(_logo, theme.breakpoints.up('sm'), {
      height: '20px'
    }), (0, _defineProperty2["default"])(_logo, theme.breakpoints.up('md'), {
      height: '24px'
    }), _logo),
    withHalva: (0, _defineProperty2["default"])({}, theme.breakpoints.down('xs'), {
      width: 26,
      overflow: 'hidden',
      '& $logo': {
        height: 24
      }
    }),
    halvaLogo: (_halvaLogo = {
      width: 62
    }, (0, _defineProperty2["default"])(_halvaLogo, theme.breakpoints.up('sm'), {
      width: 81
    }), (0, _defineProperty2["default"])(_halvaLogo, theme.breakpoints.up('md'), {
      width: 93
    }), _halvaLogo),
    phoneContainer: (0, _defineProperty2["default"])({
      display: 'none'
    }, theme.breakpoints.up('sm'), {
      display: 'block'
    })
  };
});
var _default = useStyles;
exports["default"] = _default;
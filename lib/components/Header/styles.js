"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    }, _defineProperty(_container, theme.breakpoints.up('sm'), {
      height: '80px',
      minHeight: '80px'
    }), _defineProperty(_container, theme.breakpoints.up('md'), {
      height: '104px',
      minHeight: '104px'
    }), _defineProperty(_container, '& img', {
      verticalAlign: 'top'
    }), _container),
    logo: (_logo = {
      height: '16px'
    }, _defineProperty(_logo, theme.breakpoints.up('sm'), {
      height: '20px'
    }), _defineProperty(_logo, theme.breakpoints.up('md'), {
      height: '24px'
    }), _logo),
    withHalva: _defineProperty({}, theme.breakpoints.down('xs'), {
      width: 26,
      overflow: 'hidden',
      '& $logo': {
        height: 24
      }
    }),
    halvaLogo: (_halvaLogo = {
      width: 62
    }, _defineProperty(_halvaLogo, theme.breakpoints.up('sm'), {
      width: 81
    }), _defineProperty(_halvaLogo, theme.breakpoints.up('md'), {
      width: 93
    }), _halvaLogo),
    phoneContainer: _defineProperty({
      display: 'none'
    }, theme.breakpoints.up('sm'), {
      display: 'block'
    })
  };
});
var _default = useStyles;
exports["default"] = _default;
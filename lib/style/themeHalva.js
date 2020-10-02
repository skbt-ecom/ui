"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _styles = require("@material-ui/core/styles");

var _themeBase = _interopRequireDefault(require("./themeBase"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach["default"])(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context2; (0, _forEach["default"])(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var PRIMARY_COLOR = '#ff4e50';
var SECONDARY_COLOR = '#9e9e9e';
var theme = (0, _styles.createMuiTheme)(_objectSpread(_objectSpread({}, _themeBase["default"]), {}, {
  name: 'halva',
  palette: {
    primary: {
      main: PRIMARY_COLOR
    },
    secondary: {
      main: SECONDARY_COLOR
    }
  },
  overrides: _objectSpread(_objectSpread({}, _themeBase["default"].overrides), {}, {
    MuiButton: _objectSpread(_objectSpread({}, _themeBase["default"].overrides.MuiButton), {}, {
      containedPrimary: {
        '&:hover': {
          backgroundColor: '#ff3537'
        },
        '&:focus': {
          backgroundColor: '#ff1b1e'
        },
        '&$disabled': {
          backgroundColor: '#cbcbcb',
          color: '#fff'
        }
      },
      containedSecondary: {
        backgroundColor: '#fff',
        color: PRIMARY_COLOR,
        '&:hover': {
          backgroundColor: '#f5f5f5'
        },
        '&:focus': {
          backgroundColor: 'ffe9ea'
        },
        '&$disabled': {
          backgroundColor: '#fff',
          color: '#cbcbcb'
        }
      },
      outlined: {
        borderWidth: '2px !important'
      },
      outlinedPrimary: {
        borderColor: PRIMARY_COLOR,
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)'
        },
        '&:focus': {
          backgroundColor: 'rgba(255, 78, 80, 0.12)'
        },
        '&$disabled': {
          borderWidth: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.12)',
          color: '#cbcbcb'
        }
      }
    }),
    MuiOutlinedInput: {
      root: {
        '&$focused $notchedOutline': {
          borderColor: '#fce0b4'
        },
        '&:hover $notchedOutline': {
          borderColor: '#757575'
        }
      },
      input: {
        color: '#292929'
      }
    },
    MuiInputBase: {
      input: {
        '&$disabled': {
          color: '#bbb'
        }
      }
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: '#757575'
        }
      }
    },
    MuiFormHelperText: {
      root: {
        color: '#757575'
      }
    },
    MuiTypography: {
      colorTextPrimary: {
        color: '#2b2e42'
      }
    }
  })
}));
var _default = theme;
exports["default"] = _default;
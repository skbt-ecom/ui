"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var PRIMARY_COLOR = '#ff4e50';
var theme = (0, _styles.createMuiTheme)({
  palette: {
    primary: {
      main: PRIMARY_COLOR
    },
    secondary: {
      main: '#fff'
    }
  },
  overrides: {
    MuiButton: {
      contained: {
        boxShadow: 'none !important'
      },
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
        color: PRIMARY_COLOR,
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)'
        },
        '&:focus': {
          backgroundColor: 'rgba(255, 78, 80, 0.12)'
        },
        '&$disabled': {
          backgroundColor: 'rgba(255, 255, 255, 0.12)',
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
    },
    MuiOutlinedInput: {
      root: {
        // '@media (hover: none)': {
        //   '&:hover $notchedOutline': {
        //     borderColor: '#fff',
        //   },
        // },
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
    MuiFormHelperText: {
      root: {
        color: '#757575'
      }
    }
  }
});
var _default = theme;
exports["default"] = _default;
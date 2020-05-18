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
  var _root, _uploader, _hint;

  return {
    root: (_root = {
      position: 'relative',
      width: 128
    }, (0, _defineProperty2["default"])(_root, theme.breakpoints.up('sm'), {
      width: 153
    }), (0, _defineProperty2["default"])(_root, theme.breakpoints.up('md'), {
      width: 176
    }), _root),
    fail: {
      '& $uploader': {
        borderColor: theme.palette.secondary.main,
        marginBottom: 4
      },
      '& $uploadIcon': {
        fill: theme.palette.secondary.main
      },
      '& $hint': {
        color: theme.palette.secondary.main
      }
    },
    uploader: (_uploader = {
      position: 'relative',
      borderRadius: 4,
      border: '1px dashed #d2dce3',
      background: '#f9fafc',
      cursor: 'pointer',
      transition: '0.3s border-color',
      marginBottom: 8,
      height: 88,
      width: '100%'
    }, (0, _defineProperty2["default"])(_uploader, theme.breakpoints.up('sm'), {
      marginBottom: 16,
      height: 104
    }), (0, _defineProperty2["default"])(_uploader, theme.breakpoints.up('md'), {
      height: 120
    }), (0, _defineProperty2["default"])(_uploader, '&:hover, &$active', {
      borderColor: '#607286',
      '& $uploadIcon': {
        fill: '#607286'
      }
    }), _uploader),
    active: {},
    uploadIcon: {
      fill: '#a1afbf',
      transition: '0.3s fill',
      width: 40,
      height: 36
    },
    linearProgress: (0, _defineProperty2["default"])({
      position: 'absolute',
      right: -1,
      bottom: -1,
      left: -1,
      borderRadius: '0 0 4px 4px',
      backgroundColor: '#bfcee5',
      height: 6
    }, theme.breakpoints.up('sm'), {
      height: 8
    }),
    imgOut: {
      maxWidth: '100%',
      maxHeight: '100%'
    },
    removeBtn: (0, _defineProperty2["default"])({
      position: 'absolute',
      top: 8,
      right: 8,
      borderRadius: '50%',
      minWidth: 'auto',
      padding: 0,
      width: 20,
      height: 20
    }, theme.breakpoints.up('sm'), {
      width: 24,
      height: 24
    }),
    removeIcon: (0, _defineProperty2["default"])({
      width: 13,
      height: 13
    }, theme.breakpoints.up('sm'), {
      width: 17,
      height: 17
    }),
    input: {
      display: 'none'
    },
    errMsg: {
      color: theme.palette.secondary.main,
      fontSize: 8,
      marginBottom: 4
    },
    hint: (_hint = {
      fontSize: 10,
      lineHeight: '22px'
    }, (0, _defineProperty2["default"])(_hint, theme.breakpoints.up('sm'), {
      fontSize: 14
    }), (0, _defineProperty2["default"])(_hint, theme.breakpoints.up('md'), {
      fontSize: 16
    }), _hint)
  };
}

var _default = (0, _styles.makeStyles)(styles);

exports["default"] = _default;
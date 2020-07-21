"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _Container = _interopRequireDefault(require("@material-ui/core/Container"));

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: (0, _defineProperty2["default"])({}, theme.breakpoints.down('xs'), {
      maxWidth: 425
    })
  };
});

var ContainerComponent = /*#__PURE__*/_react["default"].memo(function (props) {
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_Container["default"], (0, _extends2["default"])({
    classes: {
      fixed: classes.root
    },
    fixed: true
  }, props));
});

var _default = ContainerComponent;
exports["default"] = _default;
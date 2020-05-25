"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _styles = _interopRequireDefault(require("./styles"));

var PaperComponent = _react["default"].memo(function (props) {
  var classes = (0, _styles["default"])(props);
  return /*#__PURE__*/_react["default"].createElement(_Paper["default"], (0, _extends2["default"])({}, props, {
    classes: {
      root: classes.root
    }
  }));
});

var _default = PaperComponent;
exports["default"] = _default;
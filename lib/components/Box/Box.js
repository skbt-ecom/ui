"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var BoxComponent = _react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], props);
});

var _default = BoxComponent;
exports["default"] = _default;
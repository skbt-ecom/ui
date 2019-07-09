"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BoxComponent = _react["default"].memo(function (props) {
  return _react["default"].createElement(_Box["default"], props);
});

var _default = BoxComponent;
exports["default"] = _default;
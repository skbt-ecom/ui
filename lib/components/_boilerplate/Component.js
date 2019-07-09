"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ComponentComponent = _react["default"].memo(function (props) {
  return _react["default"].createElement("input", props);
});

var _default = ComponentComponent;
exports["default"] = _default;
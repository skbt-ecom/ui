"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Container = _interopRequireDefault(require("@material-ui/core/Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ContainerComponent = _react["default"].memo(function (props) {
  return _react["default"].createElement(_Container["default"], props);
});

var _default = ContainerComponent;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GridComponent = _react["default"].memo(function (props) {
  return _react["default"].createElement(_Grid["default"], props);
});

var _default = GridComponent;
exports["default"] = _default;
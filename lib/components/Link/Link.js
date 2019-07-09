"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Link = _interopRequireDefault(require("@material-ui/core/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LinkComponent = _react["default"].memo(function (props) {
  return _react["default"].createElement(_Link["default"], props);
});

var _default = LinkComponent;
exports["default"] = _default;
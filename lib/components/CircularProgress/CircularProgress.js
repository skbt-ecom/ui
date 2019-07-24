"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CProgress = _react["default"].memo(function (props) {
  return _react["default"].createElement(_CircularProgress["default"], props);
});

var _default = CProgress;
exports["default"] = _default;
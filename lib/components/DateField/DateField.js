"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _MaskedField = _interopRequireDefault(require("../MaskedField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DateField = _react["default"].memo(function (props) {
  return _react["default"].createElement(_MaskedField["default"], _extends({}, props, {
    mask: Date
  }));
});

var _default = DateField;
exports["default"] = _default;
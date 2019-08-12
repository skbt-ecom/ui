"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TextFieldComponent = function TextFieldComponent(props, ref) {
  return _react["default"].createElement(_TextField["default"], _extends({}, props, {
    ref: ref,
    variant: 'outlined'
  }));
};

var ForwardedTextFieldComponent = _react["default"].forwardRef(TextFieldComponent);

var _default = _react["default"].memo(ForwardedTextFieldComponent);

exports["default"] = _default;
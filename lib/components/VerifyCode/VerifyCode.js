"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactCodeInput = _interopRequireDefault(require("react-code-input"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var VerifyCode = _react["default"].memo(function (props) {
  var classes = (0, _styles["default"])(props);
  return _react["default"].createElement("div", {
    className: classes.container
  }, _react["default"].createElement(_reactCodeInput["default"], _extends({
    fields: 4,
    type: "number"
  }, props, {
    className: classes.codeInput
  })), props.error && _react["default"].createElement("p", {
    className: classes.errorMsg
  }, props.helperText));
});

var _default = VerifyCode;
exports["default"] = _default;
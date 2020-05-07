"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Container = _interopRequireDefault(require("../Container"));

var _Logo = _interopRequireDefault(require("./Logo"));

var _PhoneMain = _interopRequireDefault(require("../PhoneMain"));

var _Button = _interopRequireDefault(require("../Button"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Header = function Header(props, ref) {
  var classes = (0, _styles.useHeaderStyles)(props);
  var phoneClasses = (0, _styles.usePhoneStyles)(props.PhoneProps);
  var buttonClasses = (0, _styles.useButtonStyles)(props.ButtonProps);
  var left = props.left,
      right = props.right,
      LogoProps = props.LogoProps,
      ButtonProps = props.ButtonProps,
      PhoneProps = props.PhoneProps;
  return /*#__PURE__*/_react["default"].createElement("header", {
    className: classes.header,
    ref: ref
  }, /*#__PURE__*/_react["default"].createElement(_Container["default"], {
    className: classes.container
  }, left ? left : /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.leftBlock
  }, /*#__PURE__*/_react["default"].createElement(_Logo["default"], LogoProps)), right ? right : /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.rightBlock
  }, /*#__PURE__*/_react["default"].createElement(_PhoneMain["default"], _extends({}, PhoneProps, {
    classes: phoneClasses
  })), /*#__PURE__*/_react["default"].createElement(_Button["default"], _extends({
    color: "primary",
    children: "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C"
  }, ButtonProps, {
    classes: buttonClasses
  })))));
};

var ForwardedHeader = _react["default"].forwardRef(Header);

ForwardedHeader.defaultProps = {
  LogoProps: {},
  ButtonProps: {},
  PhoneProps: {}
};

var _default = _react["default"].memo(ForwardedHeader);

exports["default"] = _default;
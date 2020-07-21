"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Container = _interopRequireDefault(require("../Container"));

var _Logo = _interopRequireDefault(require("./Logo"));

var _PhoneMain = _interopRequireDefault(require("../PhoneMain"));

var _Button = _interopRequireDefault(require("../Button"));

var _styles = require("./styles");

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
  }, /*#__PURE__*/_react["default"].createElement(_PhoneMain["default"], (0, _extends2["default"])({}, PhoneProps, {
    classes: phoneClasses
  })), /*#__PURE__*/_react["default"].createElement(_Button["default"], (0, _extends2["default"])({
    color: "primary",
    children: "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C"
  }, ButtonProps, {
    classes: buttonClasses
  })))));
};

var ForwardedHeader = /*#__PURE__*/_react["default"].forwardRef(Header);

ForwardedHeader.defaultProps = {
  LogoProps: {},
  ButtonProps: {},
  PhoneProps: {}
};

var _default = /*#__PURE__*/_react["default"].memo(ForwardedHeader);

exports["default"] = _default;
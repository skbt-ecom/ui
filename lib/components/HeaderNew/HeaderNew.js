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

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Header = function Header(props, ref) {
  var classes = (0, _styles["default"])(props);
  var left = props.left,
      right = props.right,
      LogoProps = props.LogoProps,
      ButtonProps = props.ButtonProps,
      PhoneProps = props.PhoneProps;
  return _react["default"].createElement("header", {
    className: classes.header,
    ref: ref
  }, _react["default"].createElement(_Container["default"], {
    className: classes.container
  }, left ? left : _react["default"].createElement("div", {
    className: classes.leftBlock
  }, _react["default"].createElement(_Logo["default"], LogoProps)), right ? right : _react["default"].createElement("div", {
    className: classes.rightBlock
  }, _react["default"].createElement(_PhoneMain["default"], _extends({}, PhoneProps, {
    classes: {
      phoneContainer: classes.phoneContainer,
      phoneMultiple: classes.phoneMultiple,
      phoneHint: classes.phoneHint,
      phoneNum: classes.phoneNum
    }
  })), _react["default"].createElement(_Button["default"], _extends({
    color: "primary",
    children: "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C"
  }, ButtonProps, {
    classes: _objectSpread({
      root: classes.buttonRoot,
      label: classes.buttonLabel
    }, ButtonProps.classes)
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
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../Button"));

var _styles = _interopRequireDefault(require("./styles"));

var SupportPhone = function SupportPhone(props) {
  var _context, _context2, _context3;

  var classes = (0, _styles["default"])();
  var phone = props.phone,
      phoneHint = props.phoneHint,
      withButton = props.withButton,
      onButtonClick = props.onButtonClick,
      buttonProps = props.buttonProps,
      _props$classes = props.classes,
      propsClasses = _props$classes === void 0 ? {} : _props$classes;
  return _react["default"].createElement(_react["default"].Fragment, null, withButton && _react["default"].createElement(_Button["default"], {
    onClick: onButtonClick,
    classes: {
      root: classes.buttonRoot,
      label: classes.buttonLabel
    },
    color: buttonProps.color
  }, buttonProps.label), _react["default"].createElement("div", {
    className: (0, _concat["default"])(_context = "".concat(classes.phoneContainer, " ")).call(_context, propsClasses.phoneContainer)
  }, _react["default"].createElement("a", {
    rel: "nofollow",
    href: "tel:".concat(phone),
    className: (0, _concat["default"])(_context2 = "".concat(classes.phoneNum, " ")).call(_context2, propsClasses.phoneNum)
  }, phone), _react["default"].createElement("p", {
    className: (0, _concat["default"])(_context3 = "".concat(classes.phoneHint, " ")).call(_context3, propsClasses.phoneHint)
  }, phoneHint)));
};

SupportPhone.defaultProps = {
  phone: '8 800 100-10-20',
  phoneHint: 'Для звонков по России бесплатно',
  withButton: false,
  buttonProps: {
    color: 'primary',
    label: 'Оформить'
  }
};

var _default = _react["default"].memo(SupportPhone);

exports["default"] = _default;
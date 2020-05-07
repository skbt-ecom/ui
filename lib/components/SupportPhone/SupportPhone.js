"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../Button"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SupportPhone = function SupportPhone(props) {
  var classes = (0, _styles["default"])();
  var phone = props.phone,
      phoneHint = props.phoneHint,
      withButton = props.withButton,
      onButtonClick = props.onButtonClick,
      buttonProps = props.buttonProps,
      _props$classes = props.classes,
      propsClasses = _props$classes === void 0 ? {} : _props$classes;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, withButton && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: onButtonClick,
    classes: {
      root: classes.buttonRoot,
      label: classes.buttonLabel
    },
    color: buttonProps.color
  }, buttonProps.label), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(classes.phoneContainer, " ").concat(propsClasses.phoneContainer)
  }, /*#__PURE__*/_react["default"].createElement("a", {
    rel: "nofollow",
    href: "tel:".concat(phone),
    className: "".concat(classes.phoneNum, " ").concat(propsClasses.phoneNum)
  }, phone), /*#__PURE__*/_react["default"].createElement("p", {
    className: "".concat(classes.phoneHint, " ").concat(propsClasses.phoneHint)
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
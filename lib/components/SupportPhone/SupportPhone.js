"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../Button"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SupportPhone = _react["default"].memo(function (_ref) {
  var phone = _ref.phone,
      phoneHint = _ref.phoneHint,
      onButtonClick = _ref.onButtonClick,
      withButton = _ref.withButton;
  var classes = (0, _styles["default"])();
  return _react["default"].createElement(_react["default"].Fragment, null, withButton && _react["default"].createElement(_Button["default"], {
    onClick: onButtonClick,
    classes: {
      root: classes.buttonRoot,
      label: classes.buttonLabel
    },
    color: 'primary'
  }, "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C"), _react["default"].createElement("div", {
    className: classes.phoneContainer
  }, _react["default"].createElement("a", {
    rel: "nofollow",
    href: "tel:".concat(phone),
    className: classes.phoneNum
  }, phone), _react["default"].createElement("p", {
    className: classes.phoneHint
  }, phoneHint)));
});

SupportPhone.defaultProps = {
  phone: '8 800 100-10-20',
  phoneHint: 'Для звонков по России бесплатно',
  withButton: false
};
var _default = SupportPhone;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PhoneMain = function PhoneMain(props) {
  var classes = (0, _styles["default"])();
  var phone = props.phone,
      phoneHint = props.phoneHint,
      _props$classes = props.classes,
      propsClasses = _props$classes === void 0 ? {} : _props$classes;
  return _react["default"].createElement("div", {
    className: "".concat(classes.phoneContainer, " ").concat(propsClasses.phoneContainer)
  }, _react["default"].createElement("a", {
    rel: "nofollow",
    href: "tel:".concat(phone),
    className: "".concat(classes.phoneNum, " ").concat(propsClasses.phoneNum)
  }, phone), _react["default"].createElement("p", {
    className: "".concat(classes.phoneHint, " ").concat(propsClasses.phoneHint)
  }, phoneHint));
};

PhoneMain.defaultProps = {
  phone: '8 800 100-10-20',
  phoneHint: 'Для звонков по России бесплатно'
};

var _default = _react["default"].memo(PhoneMain);

exports["default"] = _default;
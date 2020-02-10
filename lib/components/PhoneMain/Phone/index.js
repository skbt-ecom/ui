"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Phone = function Phone(props) {
  var classes = (0, _styles["default"])();
  var number = props.number,
      _props$classes = props.classes,
      propsClasses = _props$classes === void 0 ? {} : _props$classes;
  return _react["default"].createElement("a", {
    rel: "nofollow",
    href: "tel:".concat(number),
    className: "".concat(classes.phoneNum, " ").concat(propsClasses.phoneNum)
  }, number);
};

var _default = Phone;
exports["default"] = _default;
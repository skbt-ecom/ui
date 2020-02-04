"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Phone = _interopRequireDefault(require("../Phone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PhoneWithHint = function PhoneWithHint(_ref) {
  var phone = _ref.phone,
      phoneHint = _ref.phoneHint,
      classes = _ref.classes,
      propsClasses = _ref.propsClasses;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Phone["default"], {
    number: phone,
    classes: {
      phoneNum: propsClasses.phoneNum
    }
  }), _react["default"].createElement("p", {
    className: "".concat(classes.phoneHint, " ").concat(propsClasses.phoneHint)
  }, phoneHint));
};

var _default = PhoneWithHint;
exports["default"] = _default;
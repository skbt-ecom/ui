"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Phone = _interopRequireDefault(require("../Phone"));

var PhoneWithHint = function PhoneWithHint(_ref) {
  var phone = _ref.phone,
      phoneHint = _ref.phoneHint,
      classes = _ref.classes;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Phone["default"], {
    number: phone,
    classes: {
      phoneNum: classes.phoneNum
    }
  }), phoneHint && _react["default"].createElement("p", {
    className: classes.phoneHint
  }, phoneHint));
};

var _default = PhoneWithHint;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _halva = _interopRequireDefault(require("../halva.svg"));

var Logo = function Logo(_ref) {
  var classes = _ref.classes;
  return _react["default"].createElement("div", null, _react["default"].createElement("img", {
    className: classes.halvaLogo,
    src: _halva["default"],
    alt: "halva"
  }));
};

var _default = Logo;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

var Phone = function Phone(props) {
  var classes = (0, _styles["default"])(props);
  var number = props.number;
  return /*#__PURE__*/_react["default"].createElement("a", {
    rel: "nofollow",
    href: "tel:".concat(number),
    className: classes.phoneNum
  }, number);
};

var _default = Phone;
exports["default"] = _default;
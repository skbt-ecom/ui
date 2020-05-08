"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Phone = function Phone(props) {
  var classes = (0, _styles["default"])(props);
  var number = props.number;
  return _react["default"].createElement("a", {
    rel: "nofollow",
    href: "tel:".concat(number),
    className: classes.phoneNum
  }, number);
};

var _default = Phone;
exports["default"] = _default;
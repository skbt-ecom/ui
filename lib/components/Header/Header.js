"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _logo = _interopRequireDefault(require("./logo.svg"));

var _reactSvg = _interopRequireDefault(require("react-svg"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Header = function Header(props) {
  var classes = (0, _styles["default"])(props);
  var logoHref = props.logoHref,
      phone = props.phone;
  return _react["default"].createElement("div", {
    className: classes.container
  }, _react["default"].createElement("a", {
    href: logoHref,
    className: classes.logoContainer
  }, _react["default"].createElement(_reactSvg["default"], {
    src: _logo["default"]
  })), _react["default"].createElement("div", {
    className: classes.phoneContainer
  }, _react["default"].createElement("a", {
    rel: "nofollow",
    href: "tel:".concat(phone),
    className: classes.phoneNum
  }, phone), _react["default"].createElement("p", {
    className: classes.phoneHint
  }, "\u0414\u043B\u044F \u0437\u0432\u043E\u043D\u043A\u043E\u0432 \u043F\u043E \u0420\u043E\u0441\u0441\u0438\u0438 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E")));
};

Header.defaultProps = {
  phone: '8 800 100-10-20'
};
var _default = Header;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Container = _interopRequireDefault(require("../Container"));

var _logo = _interopRequireDefault(require("./logo.svg"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Header = _react["default"].memo(function (props) {
  var classes = (0, _styles["default"])(props);
  var logoHref = props.logoHref,
      phone = props.phone,
      phoneHint = props.phoneHint;
  return (// <Container className={classes.container}>
    _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("a", {
      href: logoHref,
      className: classes.logoContainer
    }, _react["default"].createElement("img", {
      src: _logo["default"],
      alt: "logo"
    })), _react["default"].createElement("div", {
      className: classes.phoneContainer
    }, _react["default"].createElement("a", {
      rel: "nofollow",
      href: "tel:".concat(phone),
      className: classes.phoneNum
    }, phone), _react["default"].createElement("p", {
      className: classes.phoneHint
    }, phoneHint)))
  );
});

Header.defaultProps = {
  logoHref: '/',
  phone: '8 800 100-10-20',
  phoneHint: 'Для звонков по России бесплатно'
};
var _default = Header;
exports["default"] = _default;
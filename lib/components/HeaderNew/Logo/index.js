"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _logo = _interopRequireDefault(require("../logo.svg"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Logo = function Logo(props) {
  var src = props.src,
      href = props.href,
      propsClasses = props.classes;
  var classes = (0, _styles["default"])();
  return _react["default"].createElement("a", {
    href: href,
    className: propsClasses.link
  }, _react["default"].createElement("img", {
    className: "".concat(classes.logo, "  ").concat(propsClasses.logo),
    src: src,
    alt: "logo"
  }));
};

Logo.defaultProps = {
  src: _logo["default"],
  href: '/',
  alt: 'Совкомбанк',
  classes: {
    link: '',
    logo: ''
  }
};
var _default = Logo;
exports["default"] = _default;
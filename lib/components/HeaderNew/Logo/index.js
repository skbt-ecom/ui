"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _react = _interopRequireDefault(require("react"));

var _logo = _interopRequireDefault(require("../logo.svg"));

var _styles = _interopRequireDefault(require("./styles"));

var Logo = function Logo(props) {
  var _context;

  var src = props.src,
      href = props.href,
      propsClasses = props.classes;
  var classes = (0, _styles["default"])();
  return _react["default"].createElement("a", {
    href: href,
    className: propsClasses.link
  }, _react["default"].createElement("img", {
    className: (0, _concat["default"])(_context = "".concat(classes.logo, "  ")).call(_context, propsClasses.logo),
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
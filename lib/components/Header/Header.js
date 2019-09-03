"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Container = _interopRequireDefault(require("../Container"));

var _Button = _interopRequireDefault(require("../Button"));

var _logo = _interopRequireDefault(require("./logo.svg"));

var _halva = _interopRequireDefault(require("./halva.svg"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Logo = function Logo(_ref) {
  var classes = _ref.classes;
  return _react["default"].createElement("div", null, _react["default"].createElement("img", {
    className: classes.halvaLogo,
    src: _halva["default"],
    alt: "halva"
  }));
};

var Phone = function Phone(_ref2) {
  var classes = _ref2.classes,
      phone = _ref2.phone,
      phoneHint = _ref2.phoneHint,
      onButtonClick = _ref2.onButtonClick;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Button["default"], {
    onClick: onButtonClick,
    classes: {
      root: classes.buttonRoot,
      label: classes.buttonLabel
    },
    color: 'primary'
  }, "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C"), _react["default"].createElement("div", {
    className: classes.phoneContainer
  }, _react["default"].createElement("a", {
    rel: "nofollow",
    href: "tel:".concat(phone),
    className: classes.phoneNum
  }, phone), _react["default"].createElement("p", {
    className: classes.phoneHint
  }, phoneHint)));
};

var Header = function Header(props) {
  var classes = (0, _styles["default"])(props);
  var logoHref = props.logoHref,
      type = props.type;
  return _react["default"].createElement(_Container["default"], {
    className: classes.container
  }, _react["default"].createElement("a", {
    href: logoHref,
    className: type === 'withHalvaLogo' ? classes.withHalva : ''
  }, _react["default"].createElement("img", {
    className: classes.logo,
    src: _logo["default"],
    alt: "logo"
  })), function () {
    switch (type) {
      case 'withHalvaLogo':
        return _react["default"].createElement(Logo, {
          classes: classes
        });

      default:
        return _react["default"].createElement(Phone, _extends({}, props, {
          classes: classes
        }));
    }
  }());
};

Header.defaultProps = {
  logoHref: '/',
  phone: '8 800 100-10-20',
  phoneHint: 'Для звонков по России бесплатно',
  withHalvaLogo: false,
  type: 'default'
};

var _default = _react["default"].memo(Header);

exports["default"] = _default;
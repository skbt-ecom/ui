"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Container = _interopRequireDefault(require("../Container"));

var _SupportPhone = _interopRequireDefault(require("../SupportPhone"));

var _logo = _interopRequireDefault(require("./logo.svg"));

var _halva = _interopRequireDefault(require("./halva.svg"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Logo = function Logo(_ref) {
  var classes = _ref.classes;
  return _react["default"].createElement("div", null, _react["default"].createElement("img", {
    className: classes.halvaLogo,
    src: _halva["default"],
    alt: "halva"
  }));
};

var Header = function Header(props) {
  var classes = (0, _styles["default"])(props);
  var logoHref = props.logoHref,
      type = props.type,
      phone = props.phone,
      phoneHint = props.phoneHint,
      onButtonClick = props.onButtonClick,
      withButton = props.withButton,
      buttonProps = props.buttonProps;
  var supportPhoneComponentProps = {
    phone: phone,
    phoneHint: phoneHint,
    withButton: withButton || buttonProps,
    onButtonClick: onButtonClick,
    buttonProps: buttonProps,
    classes: {
      phoneContainer: classes.phoneContainer
    }
  };
  return _react["default"].createElement("header", {
    className: classes.header
  }, _react["default"].createElement(_Container["default"], {
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
        return _react["default"].createElement(_SupportPhone["default"], supportPhoneComponentProps);
    }
  }()));
};

Header.defaultProps = {
  logoHref: '/',
  phone: '8 800 100-10-20',
  phoneHint: 'Для звонков по России бесплатно',
  type: 'default',
  withButton: false
};

var _default = _react["default"].memo(Header);

exports["default"] = _default;
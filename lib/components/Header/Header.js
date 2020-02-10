"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Container = _interopRequireDefault(require("../Container"));

var _Logo = _interopRequireDefault(require("./Logo"));

var _SupportPhone = _interopRequireDefault(require("../SupportPhone"));

var _logo = _interopRequireDefault(require("./logo.svg"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var renderRight = function renderRight(type, _ref) {
  var classes = _ref.classes,
      supportPhoneComponentProps = _ref.supportPhoneComponentProps;

  switch (type) {
    case 'withHalvaLogo':
      return _react["default"].createElement(_Logo["default"], {
        classes: classes
      });

    default:
      return _react["default"].createElement(_SupportPhone["default"], supportPhoneComponentProps);
  }
};

var Header = function Header(props) {
  var classes = (0, _styles["default"])(props);
  var logoHref = props.logoHref,
      type = props.type;
  var newButtonProps = props.buttonProps ? _objectSpread({}, props.buttonProps, {
    isVisible: true
  }) : undefined;
  var supportPhoneComponentProps = {
    phone: props.phone,
    phoneHint: props.phoneHint,
    withButton: props.withButton || newButtonProps,
    // if props.buttonProps exist we must show button
    onButtonClick: props.onButtonClick,
    buttonProps: newButtonProps,
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
  })), renderRight(type, {
    classes: classes,
    supportPhoneComponentProps: supportPhoneComponentProps
  })));
};

Header.defaultProps = {
  logoHref: '/',
  phone: '8 800 100-10-20',
  phoneHint: 'Для звонков по России бесплатно',
  type: 'default',
  withButton: false,
  buttonProps: undefined
};

var _default = _react["default"].memo(Header);

exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _Container = _interopRequireDefault(require("../Container"));

var _Logo = _interopRequireDefault(require("./Logo"));

var _SupportPhone = _interopRequireDefault(require("../SupportPhone"));

var _logo = _interopRequireDefault(require("./logo.svg"));

var _styles = _interopRequireDefault(require("./styles"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach["default"])(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context2; (0, _forEach["default"])(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

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
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Phone = _interopRequireDefault(require("./Phone"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var PhoneMain = function PhoneMain(props) {
  var classes = (0, _styles["default"])();
  var phone = props.phone,
      phoneHint = props.phoneHint,
      phones = props.phones,
      _props$classes = props.classes,
      propsClasses = _props$classes === void 0 ? {} : _props$classes;

  var renderPhoneWithHint = function renderPhoneWithHint() {
    return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Phone["default"], {
      number: phone,
      classes: {
        phoneNum: propsClasses.phoneNum
      }
    }), _react["default"].createElement("p", {
      className: "".concat(classes.phoneHint, " ").concat(propsClasses.phoneHint)
    }, phoneHint));
  };

  return _react["default"].createElement("div", {
    className: "".concat(classes.phoneContainer, " ").concat(propsClasses.phoneContainer)
  }, !phones && phone && renderPhoneWithHint(), phones && phones.map(function (phone, i) {
    return _react["default"].createElement(_Phone["default"], {
      key: i,
      number: phone,
      classes: {
        phoneNum: "".concat(classes.phoneMultiple, " ").concat(propsClasses.phoneNum)
      }
    });
  }));
};

PhoneMain.defaultProps = {
  phone: '8 800 100-10-20',
  phoneHint: 'Для звонков по России бесплатно'
};

var _default = _react["default"].memo(PhoneMain);

exports["default"] = _default;
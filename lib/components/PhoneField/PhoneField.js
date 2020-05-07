"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _MaskedField = _interopRequireDefault(require("../MaskedField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PHONE_MASKS = [{
  mask: '+{7} (000) 000-00-00',
  lazy: false
}, {
  mask: '{8} (000) 000-00-00',
  lazy: false
}];

var PhoneField = _react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_MaskedField["default"], _extends({
    type: "tel",
    mask: PHONE_MASKS,
    dispatch: function dispatch(appended, dynamicMasked) {
      var number = (dynamicMasked.value + appended).replace(/\D/g, '');

      if (number) {
        return number.startsWith('7') ? dynamicMasked.compiledMasks[0] : dynamicMasked.compiledMasks[1];
      }
    }
  }, props));
});

var _default = PhoneField;
exports["default"] = _default;
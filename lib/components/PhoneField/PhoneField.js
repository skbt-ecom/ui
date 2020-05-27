"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _startsWith = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/starts-with"));

var _react = _interopRequireDefault(require("react"));

var _MaskedField = _interopRequireDefault(require("../MaskedField"));

var PHONE_MASKS = [{
  mask: '+{7} (000) 000-00-00',
  lazy: false
}, {
  mask: '{8} (000) 000-00-00',
  lazy: false
}];

var PhoneField = _react["default"].memo(function (props) {
  return _react["default"].createElement(_MaskedField["default"], (0, _extends2["default"])({
    type: "tel",
    mask: PHONE_MASKS,
    dispatch: function dispatch(appended, dynamicMasked) {
      var number = (dynamicMasked.value + appended).replace(/\D/g, '');

      if (number) {
        return (0, _startsWith["default"])(number).call(number, '7') ? dynamicMasked.compiledMasks[0] : dynamicMasked.compiledMasks[1];
      }
    }
  }, props));
});

var _default = PhoneField;
exports["default"] = _default;
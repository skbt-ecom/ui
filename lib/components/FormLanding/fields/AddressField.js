"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _AddressField = _interopRequireDefault(require("../../AddressField"));

var _Field = require("../FormContext/Field");

var _addressValidator = require("../validators/addressValidator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var AddressField = _react["default"].memo(function (props) {
  return _react["default"].createElement(_AddressField["default"], props);
});

var WrappedField = function WrappedField(props) {
  return _react["default"].createElement(_Field.Field, _extends({
    validate: _addressValidator.addressWithFlatValidator,
    validateOnBlur: false,
    defaultValue: null
  }, props, {
    component: AddressField
  }));
};

var _default = WrappedField;
exports["default"] = _default;
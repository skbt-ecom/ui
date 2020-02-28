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

var AddressField = _react["default"].memo(function (props) {
  return _react["default"].createElement(_AddressField["default"], props);
});

var WrappedField = function WrappedField(props) {
  return _react["default"].createElement(_Field.Field, props);
};

WrappedField.defaultProps = {
  component: AddressField,
  validate: _addressValidator.addressWithFlatValidator,
  validateOnBlur: false,
  defaultValue: null,
  helperText: {
    addressDadata: 'Район, город, улица, дом'
  }
};
WrappedField.displayName = 'AddressField';
var _default = WrappedField;
exports["default"] = _default;
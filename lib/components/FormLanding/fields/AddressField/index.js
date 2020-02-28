"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _AddressField = _interopRequireDefault(require("../../../AddressField"));

var _Field = require("../../FormContext/Field");

var _addressValidator = require("../../validators/addressValidator");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var AddressField = _react["default"].memo(function (props) {
  var addressDadataClasses = (0, _styles.useAddressDadataStyles)(props);
  var flatInfoClasses = (0, _styles.useFlatInfoStyles)(props);
  return _react["default"].createElement(_AddressField["default"], _extends({
    classes: {
      addressDadataClasses: {
        classes: addressDadataClasses
      },
      flatInfoClasses: {
        classes: flatInfoClasses
      }
    }
  }, props));
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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _AddressField = _interopRequireDefault(require("../../../AddressField"));

var _Field = require("../../FormContext/Field");

var _validators = require("../../validators");

var _styles = _interopRequireDefault(require("../styles"));

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var AddressField = _react["default"].memo(function (props) {
  var addressDadataClasses = (0, _styles2.useAddressDadataStyles)(props);
  var flatInfoClasses = (0, _styles2.useFlatInfoStyles)(props);
  return /*#__PURE__*/_react["default"].createElement(_AddressField["default"], _extends({
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
  var classes = (0, _styles["default"])(props);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.fieldWrapper
  }, /*#__PURE__*/_react["default"].createElement(_Field.Field, props));
};

WrappedField.defaultProps = {
  component: AddressField,
  validate: _validators.addressWithFlatValidator,
  validateOnBlur: false,
  defaultValue: null,
  helperText: {
    addressDadata: 'Район, город, улица, дом'
  }
};
WrappedField.displayName = 'AddressField';
var _default = WrappedField;
exports["default"] = _default;
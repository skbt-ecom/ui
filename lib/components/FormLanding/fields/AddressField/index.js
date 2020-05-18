"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _AddressField = _interopRequireDefault(require("../../../AddressField"));

var _Field = require("../../FormContext/Field");

var _validators = require("../../validators");

var _styles = _interopRequireDefault(require("../styles"));

var _styles2 = require("./styles");

var AddressField = _react["default"].memo(function (props) {
  var addressDadataClasses = (0, _styles2.useAddressDadataStyles)(props);
  var flatInfoClasses = (0, _styles2.useFlatInfoStyles)(props);
  return _react["default"].createElement(_AddressField["default"], (0, _extends2["default"])({
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
  return _react["default"].createElement("div", {
    className: classes.fieldWrapper
  }, _react["default"].createElement(_Field.Field, props));
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
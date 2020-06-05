"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _DadataAddressFlat = _interopRequireDefault(require("../../../DadataFields/DadataAddressFlat"));

var _Field = require("../../FormContext/Field");

var _validators = require("../../validators");

var _styles = _interopRequireDefault(require("../styles"));

var _styles2 = require("./styles");

var DadataAddressFlat = _react["default"].memo(function (_ref) {
  var onChange = _ref.onChange,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["onChange"]);
  var addressDadataClasses = (0, _styles2.useAddressDadataStyles)(props);
  var flatInfoClasses = (0, _styles2.useFlatInfoStyles)(props);
  var handleBlur = (0, _react.useCallback)(function (e, values) {
    onChange(values);
  }, [onChange]);
  return /*#__PURE__*/_react["default"].createElement(_DadataAddressFlat["default"], (0, _extends2["default"])({
    classes: {
      addressDadataClasses: {
        classes: addressDadataClasses
      },
      flatInfoClasses: {
        classes: flatInfoClasses
      }
    }
  }, props, {
    onBlur: handleBlur
  }));
});

var WrappedField = function WrappedField(props) {
  var classes = (0, _styles["default"])(props);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.fieldWrapper
  }, /*#__PURE__*/_react["default"].createElement(_Field.Field, props));
};

WrappedField.defaultProps = {
  component: DadataAddressFlat,
  validate: _validators.addressFlatDadataValidator,
  validateOnBlur: false,
  defaultValue: {},
  helperText: {
    addressDadata: 'Район, город, улица, дом'
  }
};
WrappedField.displayName = 'DadataAddressFlat';
var _default = WrappedField;
exports["default"] = _default;
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

var _DadataAddress = _interopRequireDefault(require("../../../DadataFields/DadataAddress"));

var _Field = require("../../FormContext/Field");

var _validators = require("../../validators");

var _styles = _interopRequireDefault(require("../styles"));

var DadataAddress = /*#__PURE__*/_react["default"].memo(function (_ref) {
  var onChange = _ref.onChange,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["onChange"]);
  var handleBlur = (0, _react.useCallback)(function (e, values) {
    onChange(values);
  }, [onChange]);
  return /*#__PURE__*/_react["default"].createElement(_DadataAddress["default"], (0, _extends2["default"])({}, props, {
    onBlur: handleBlur
  }));
});

var WrappedField = function WrappedField(_ref2) {
  var classsesComponent = _ref2.classsesComponent,
      props = (0, _objectWithoutProperties2["default"])(_ref2, ["classsesComponent"]);
  var classes = (0, _styles["default"])(props);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.fieldWrapper
  }, /*#__PURE__*/_react["default"].createElement(_Field.Field, (0, _extends2["default"])({}, props, {
    classes: classsesComponent
  })));
};

WrappedField.dislayName = 'DadataAddress';
WrappedField.defaultProps = {
  component: DadataAddress,
  validate: _validators.addressDadataValidator,
  defaultValue: {},
  validateOnBlur: false,
  fullWidth: true
};
var _default = WrappedField;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _DateField = _interopRequireDefault(require("../../DateField"));

var _Field = require("../FormContext/Field");

var _validators = require("../validators");

var _styles = _interopRequireDefault(require("./styles"));

var DateField = _react["default"].memo(function (props) {
  return _react["default"].createElement(_DateField["default"], props);
});

var WrappedField = function WrappedField(_ref) {
  var validAgeMin = _ref.validAgeMin,
      validAgeMax = _ref.validAgeMax,
      classsesComponent = _ref.classsesComponent,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["validAgeMin", "validAgeMax", "classsesComponent"]);
  var classes = (0, _styles["default"])(props);
  var isAgeValidationRequred = validAgeMin || validAgeMax;
  var validator = isAgeValidationRequred ? function (value) {
    return (0, _validators.birthdateValidator)(value, {
      validAgeMin: validAgeMin,
      validAgeMax: validAgeMax
    });
  } : _validators.dateValidator;
  return _react["default"].createElement("div", {
    className: classes.fieldWrapper
  }, _react["default"].createElement(_Field.Field, (0, _extends2["default"])({
    validate: validator
  }, props, {
    classes: classsesComponent
  })));
};

WrappedField.displayName = 'DateField';
WrappedField.defaultProps = {
  component: DateField,
  defaultValue: '',
  fullWidth: true
};
var _default = WrappedField;
exports["default"] = _default;
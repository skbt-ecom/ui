"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _DateField = _interopRequireDefault(require("../../DateField"));

var _Field = require("../FormContext/Field");

var _dateValidator = require("../validators/dateValidator");

var _birthdateValidator = require("../validators/birthdateValidator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DateField = _react["default"].memo(function (props) {
  return _react["default"].createElement(_DateField["default"], props);
});

var WrappedDateField = function WrappedDateField(_ref) {
  var validAge = _ref.validAge,
      props = _objectWithoutProperties(_ref, ["validAge"]);

  var validator = validAge ? function (value) {
    return (0, _birthdateValidator.birthdateValidator)(value, validAge);
  } : _dateValidator.dateValidator;
  return _react["default"].createElement(_Field.Field, _extends({
    validate: validator,
    defaultValue: ''
  }, props, {
    component: DateField
  }));
};

var _default = WrappedDateField;
exports["default"] = _default;
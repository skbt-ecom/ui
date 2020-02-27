"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _DadataField = _interopRequireDefault(require("../../DadataField"));

var _Field = require("../FormContext/Field");

var _fioValidator = require("../validators/fioValidator");

var _addressValidator = require("../validators/addressValidator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var fioDefaultProps = {
  label: 'Фамилия Имя Отчество',
  name: 'fio',
  defaultValue: '',
  validate: _fioValidator.fioValidator,
  validateOnBlur: false,
  fullWidth: fullWidth
};
var addressDefaultProps = {
  label: 'Адрес',
  name: 'address',
  defaultValue: '',
  validate: _addressValidator.addressValidator,
  validateOnBlur: false,
  fullWidth: fullWidth
};

var DadataField = _react["default"].memo(function (props) {
  var onChange = function onChange(data) {
    props.onChange(data);
  };

  return _react["default"].createElement(_DadataField["default"], _extends({}, props, {
    onChange: onChange
  }));
});

var WrappedDadataField = function WrappedDadataField(props) {
  var type = props.type;
  var propsByType = type === 'fio' ? _objectSpread({}, fioDefaultProps) : _objectSpread({}, addressDefaultProps);
  return _react["default"].createElement(_Field.Field, _extends({}, propsByType, props, {
    component: DadataField
  }));
};

var _default = WrappedDadataField;
exports["default"] = _default;
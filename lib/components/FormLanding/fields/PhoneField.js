"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _PhoneField = _interopRequireDefault(require("../../PhoneField"));

var _Field = require("../FormContext/Field");

var _phoneValidator = require("../validators/phoneValidator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PhoneField = _react["default"].memo(function (props) {
  return _react["default"].createElement(_PhoneField["default"], props);
});

var WrappedField = function WrappedField(props) {
  return _react["default"].createElement(_Field.Field, props);
};

WrappedField.defaultProps = {
  component: PhoneField,
  label: 'Телефон',
  validate: _phoneValidator.phoneValidator,
  placeholder: '+7 (000) 000-00-00',
  unmask: true,
  defaultValue: '',
  fullWidth: true
};
var _default = WrappedField;
exports["default"] = _default;
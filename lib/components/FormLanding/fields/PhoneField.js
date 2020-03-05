"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _PhoneField = _interopRequireDefault(require("../../PhoneField"));

var _Field = require("../FormContext/Field");

var _phoneValidator = require("../validators/phoneValidator");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PhoneField = _react["default"].memo(function (props) {
  return _react["default"].createElement(_PhoneField["default"], props);
});

var WrappedField = function WrappedField(props) {
  var classes = (0, _styles["default"])(props);
  return _react["default"].createElement("div", {
    className: classes.fieldWrapper
  }, _react["default"].createElement(_Field.Field, props));
};

WrappedField.displayName = 'PhoneField';
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
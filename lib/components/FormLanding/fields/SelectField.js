"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Select = _interopRequireDefault(require("../../Select"));

var _Field = require("../FormContext/Field");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SelectField = _react["default"].memo(function (props) {
  var onChange = function onChange(e) {
    props.onChange(e.target.value);
  };

  return _react["default"].createElement(_Select["default"], _extends({}, props, {
    onChange: onChange
  }));
});

var WrappedField = function WrappedField(props) {
  var classes = (0, _styles["default"])(props);
  return _react["default"].createElement("div", {
    className: classes.fieldWrapper
  }, _react["default"].createElement(_Field.Field, props));
};

WrappedField.displayName = 'SelectField';
WrappedField.defaultProps = {
  component: SelectField,
  fullWidth: true,
  defaultValue: ''
};
var _default = WrappedField;
exports["default"] = _default;
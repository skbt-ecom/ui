"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextField = void 0;

var _react = _interopRequireDefault(require("react"));

var _Field = require("../form/Field");

var _TextField = _interopRequireDefault(require("../../TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TextFieldClear = _react["default"].memo(function (props) {
  var onChange = function onChange(e) {
    props.onChange(e.target.value);
  };

  return _react["default"].createElement(_TextField["default"], _extends({}, props, {
    onChange: onChange
  }));
});

var TextField = function TextField(props) {
  return _react["default"].createElement(_Field.Field, _extends({}, props, {
    component: TextFieldClear
  }));
};

exports.TextField = TextField;
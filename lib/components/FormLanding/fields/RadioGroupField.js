"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = WrappedField;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _RadioGroupField = _interopRequireDefault(require("../../RadioGroupField"));

var _Field = require("../FormContext/Field");

function RadioGroupField(props) {
  return /*#__PURE__*/_react["default"].createElement(_RadioGroupField["default"], props);
}

function WrappedField(props) {
  return /*#__PURE__*/_react["default"].createElement(_Field.Field, (0, _extends2["default"])({}, props, {
    component: RadioGroupField
  }));
}
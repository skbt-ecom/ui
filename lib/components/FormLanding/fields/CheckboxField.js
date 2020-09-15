"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = WrappedField;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _Checkbox = _interopRequireDefault(require("../../Checkbox/Checkbox"));

var _Field = require("../FormContext/Field");

function Checkbox(props) {
  function handleChange(e) {
    props.onChange(e.target.checked);
  }

  return /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], (0, _extends2["default"])({}, props, {
    onChange: handleChange
  }));
}

function WrappedField(props) {
  return /*#__PURE__*/_react["default"].createElement(_Field.Field, (0, _extends2["default"])({}, props, {
    component: Checkbox
  }));
}
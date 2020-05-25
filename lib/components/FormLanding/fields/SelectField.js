"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Select = _interopRequireDefault(require("../../Select"));

var _Field = require("../FormContext/Field");

var _styles = _interopRequireDefault(require("./styles"));

var SelectField = _react["default"].memo(function (props) {
  var onChange = function onChange(e) {
    props.onChange(e.target.value);
  };

  return /*#__PURE__*/_react["default"].createElement(_Select["default"], (0, _extends2["default"])({}, props, {
    onChange: onChange
  }));
});

var WrappedField = function WrappedField(_ref) {
  var classsesComponent = _ref.classsesComponent,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["classsesComponent"]);
  var classes = (0, _styles["default"])(props);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.fieldWrapper
  }, /*#__PURE__*/_react["default"].createElement(_Field.Field, (0, _extends2["default"])({}, props, {
    classes: classsesComponent
  })));
};

WrappedField.displayName = 'SelectField';
WrappedField.defaultProps = {
  component: SelectField,
  fullWidth: true,
  defaultValue: ''
};
var _default = WrappedField;
exports["default"] = _default;
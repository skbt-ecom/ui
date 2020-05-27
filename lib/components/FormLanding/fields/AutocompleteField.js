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

var _AutocompleteField = _interopRequireDefault(require("../../AutocompleteField"));

var _Field = require("../FormContext/Field");

var _validators = require("../validators");

var _styles = _interopRequireDefault(require("./styles"));

var AutocompleteField = /*#__PURE__*/_react["default"].memo(function (props) {
  var onChange = function onChange(_, value) {
    props.onChange(value);
  };

  return /*#__PURE__*/_react["default"].createElement(_AutocompleteField["default"], (0, _extends2["default"])({}, props, {
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

WrappedField.dislayName = 'AutocompleteField';
WrappedField.defaultProps = {
  component: AutocompleteField,
  validate: _validators.autocompleteValidator,
  defaultValue: null,
  options: [],
  validateOnBlur: false,
  fullWidth: true
};
var _default = WrappedField;
exports["default"] = _default;
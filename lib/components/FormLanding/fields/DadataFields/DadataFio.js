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

var _DadataFio = _interopRequireDefault(require("../../../DadataFields/DadataFio"));

var _Field = require("../../FormContext/Field");

var _validators = require("./../../validators");

var _styles = _interopRequireDefault(require("../styles"));

var DadataFio = _react["default"].memo(function (props) {
  var handleBlur = function handleBlur(e, values) {
    props.onChange(values);
  };

  return _react["default"].createElement(_DadataFio["default"], (0, _extends2["default"])({}, props, {
    onBlur: handleBlur
  }));
});

var WrappedField = function WrappedField(_ref) {
  var classsesComponent = _ref.classsesComponent,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["classsesComponent"]);
  var classes = (0, _styles["default"])(props);
  return _react["default"].createElement("div", {
    className: classes.fieldWrapper
  }, _react["default"].createElement(_Field.Field, (0, _extends2["default"])({}, props, {
    classes: classsesComponent
  })));
};

WrappedField.dislayName = 'DadataFio';
WrappedField.defaultProps = {
  component: DadataFio,
  validate: _validators.fioDadataValidator,
  defaultValue: {},
  validateOnBlur: false,
  fullWidth: true
};
var _default = WrappedField;
exports["default"] = _default;
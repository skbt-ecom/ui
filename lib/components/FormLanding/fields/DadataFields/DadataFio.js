"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _DadataFio = _interopRequireDefault(require("../../../DadataFields/DadataFio"));

var _Field = require("../../FormContext/Field");

var _validators = require("./../../validators");

var _styles = _interopRequireDefault(require("../styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DadataFio = _react["default"].memo(function (props) {
  var handleBlur = function handleBlur(e, values) {
    props.onChange(values);
  };

  return _react["default"].createElement(_DadataFio["default"], _extends({}, props, {
    onBlur: handleBlur
  }));
});

var WrappedField = function WrappedField(_ref) {
  var classsesComponent = _ref.classsesComponent,
      props = _objectWithoutProperties(_ref, ["classsesComponent"]);

  var classes = (0, _styles["default"])(props);
  return _react["default"].createElement("div", {
    className: classes.fieldWrapper
  }, _react["default"].createElement(_Field.Field, _extends({}, props, {
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
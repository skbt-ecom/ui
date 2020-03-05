"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Autosuggest = _interopRequireDefault(require("../../Autosuggest"));

var _Field = require("../FormContext/Field");

var _validators = require("../validators");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AutosuggestField = _react["default"].memo(function (props) {
  return _react["default"].createElement(_Autosuggest["default"], props);
});

var WrappedField = function WrappedField(props) {
  var classes = (0, _styles["default"])(props);
  return _react["default"].createElement("div", {
    className: classes.fieldWrapper
  }, _react["default"].createElement(_Field.Field, props));
};

WrappedField.dislayName = 'AutosuggestField';
WrappedField.defaultProps = {
  component: AutosuggestField,
  validate: _validators.autosuggestValidator,
  defaultValue: '',
  suggestions: [],
  validateOnBlur: false,
  fullWidth: true
};
var _default = WrappedField;
exports["default"] = _default;
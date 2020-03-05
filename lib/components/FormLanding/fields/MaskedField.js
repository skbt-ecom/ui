"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _MaskedField = _interopRequireDefault(require("../../MaskedField"));

var _Field = require("../FormContext/Field");

var _requiredValidator = require("../validators/requiredValidator");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MaskedField = _react["default"].memo(function (props) {
  return _react["default"].createElement(_MaskedField["default"], props);
});

var WrappedField = function WrappedField(props) {
  var classes = (0, _styles["default"])(props);
  return _react["default"].createElement("div", {
    className: classes.fieldWrapper
  }, _react["default"].createElement(_Field.Field, props));
};

WrappedField.displayName = 'MaskedField';
WrappedField.defaultProps = {
  component: MaskedField,
  validate: _requiredValidator.requiredValidator,
  fullWidth: true
};
var _default = WrappedField;
exports["default"] = _default;
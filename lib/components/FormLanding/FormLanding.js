"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Container = _interopRequireDefault(require("../Container"));

var _Form = require("./FormContext/Form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FormLanding = _react["default"].memo(function (props) {
  var onChangeFields = function onChangeFields(updates) {
    console.log('updates', updates);
    props.onChangeFields(updates);
  };

  var onSubmit = function onSubmit(values) {
    props.onSubmit(values);
  };

  return _react["default"].createElement(_Container["default"], null, _react["default"].createElement(_Form.Form, {
    onSubmit: onSubmit,
    onChangeFields: onChangeFields
  }, props.children));
});

FormLanding.propTypes = {};
var _default = FormLanding;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Container = _interopRequireDefault(require("../Container"));

var _Grid = _interopRequireDefault(require("../Grid"));

var _Form = require("./form/Form");

var _wrappedFields = require("./wrappedFields");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FIELDS_CONFIG = {
  fio: function fio(props) {
    return _react["default"].createElement(_wrappedFields.TextField, _extends({
      label: 'ФИО'
    }, props));
  } // email: <TextField label={'E-mail'} />,

};

var renderField = function renderField(field, index) {
  return _react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    key: index
  }, FIELDS_CONFIG[field]());
};

var FormLanding = _react["default"].memo(function (props) {
  var _props$config = props.config,
      title = _props$config.title,
      fields = _props$config.fields;

  var onChangeFields = function onChangeFields(updates) {};

  var onSubmit = function onSubmit() {};

  return _react["default"].createElement(_Container["default"], null, _react["default"].createElement(_Form.Form, {
    onSubmit: onSubmit,
    onChangeFields: onChangeFields
  }, _react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 4
  }, _react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, _react["default"].createElement("h2", null, title)), fields.map(renderField))));
});

FormLanding.propTypes = {
  config: _propTypes["default"].shape({
    title: _propTypes["default"].node,
    fields: _propTypes["default"].array.isRequired
  })
};
var _default = FormLanding;
exports["default"] = _default;
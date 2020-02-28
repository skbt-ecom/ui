"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Form = require("./FormContext/Form");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FormLanding = _react["default"].memo(function (props) {
  var classes = (0, _styles["default"])(props);

  var onChangeFields = function onChangeFields(updates) {
    console.log('updates', updates);
    props.onChangeFields(updates);
  };

  var onSubmit = function onSubmit(values) {
    props.onSubmit(values);
  };

  return _react["default"].createElement("div", {
    className: classes.container
  }, _react["default"].createElement(_Form.Form, {
    onSubmit: onSubmit,
    onChangeFields: onChangeFields
  }, _react["default"].Children.map(props.children, function (child) {
    return _react["default"].createElement("div", {
      className: "".concat(classes.fieldWrapper, " ").concat(child.type.displayName === 'Acceptment' ? classes.fieldWrapperAcceptment : '')
    }, child);
  })));
});

FormLanding.propTypes = {};
var _default = FormLanding;
exports["default"] = _default;
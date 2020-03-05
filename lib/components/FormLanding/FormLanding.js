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

var FormLanding = function FormLanding(props, ref) {
  var classes = (0, _styles["default"])(props);
  return _react["default"].createElement("div", {
    className: classes.container
  }, _react["default"].createElement(_Form.Form, {
    onSubmit: props.onSubmit,
    onChangeFields: props.onChangeFields,
    ref: ref
  }, props.children));
};

var ForwardedComponent = _react["default"].forwardRef(FormLanding);

var _default = _react["default"].memo(ForwardedComponent);

exports["default"] = _default;
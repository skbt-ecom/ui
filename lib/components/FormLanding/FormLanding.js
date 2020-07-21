"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Form = require("./FormContext/Form");

var _styles = _interopRequireDefault(require("./styles"));

var FormLanding = function FormLanding(props, ref) {
  var classes = (0, _styles["default"])(props);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react["default"].createElement(_Form.Form, {
    onSubmit: props.onSubmit,
    onChangeFields: props.onChangeFields,
    ref: ref
  }, props.children));
};

var ForwardedComponent = /*#__PURE__*/_react["default"].forwardRef(FormLanding);

var _default = /*#__PURE__*/_react["default"].memo(ForwardedComponent);

exports["default"] = _default;
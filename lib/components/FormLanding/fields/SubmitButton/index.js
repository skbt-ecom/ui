"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../../Button"));

var _Form = require("../../FormContext/Form");

var Button = function Button(_ref) {
  var classsesComponent = _ref.classsesComponent,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["classsesComponent"]);
  var context = (0, _react.useContext)(_Form.FormContext);

  var onClick = function onClick() {
    context.onSubmit();
  };

  return /*#__PURE__*/_react["default"].createElement(_Button["default"], (0, _extends2["default"])({
    color: 'primary',
    fullWidth: true
  }, props, {
    classes: classsesComponent,
    onClick: onClick
  }));
};

var _default = _react["default"].memo(Button);

exports["default"] = _default;
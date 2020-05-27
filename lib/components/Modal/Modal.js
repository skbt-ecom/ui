"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Modal = _interopRequireDefault(require("@material-ui/core/Modal"));

var Modal = function Modal(props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_Modal["default"], (0, _extends2["default"])({}, props, {
    ref: ref
  }));
};

var ForwardedModal = /*#__PURE__*/_react["default"].forwardRef(Modal);

var _default = /*#__PURE__*/_react["default"].memo(ForwardedModal);

exports["default"] = _default;
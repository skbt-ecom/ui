"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Modal = _interopRequireDefault(require("@material-ui/core/Modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Modal = function Modal(props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_Modal["default"], _extends({}, props, {
    ref: ref
  }));
};

var ForwardedModal = _react["default"].forwardRef(Modal);

var _default = _react["default"].memo(ForwardedModal);

exports["default"] = _default;
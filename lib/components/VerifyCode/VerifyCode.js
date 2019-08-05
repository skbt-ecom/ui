"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var VerifyCode = _react["default"].memo(function (props) {
  var classes = (0, _styles["default"])(props);

  var handleKeyDown = function handleKeyDown(e) {
    var iKeyCode = e.which ? e.which : e.keyCode;

    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57)) {
      e.preventDefault();
    }
  };

  return _react["default"].createElement("div", {
    className: classes.verifyCodeWrapper
  }, _react["default"].createElement("div", {
    className: classes.verifyCodeContainer
  }, _react["default"].createElement("input", {
    className: classes.verifyCodeInput,
    onKeyDown: handleKeyDown,
    maxLength: "4",
    pattern: "\\d*",
    onChange: props.onChange,
    value: props.value,
    autoFocus: true
  })), props.error && _react["default"].createElement("p", {
    className: classes.helperText
  }, props.helperText));
});

var _default = VerifyCode;
exports["default"] = _default;
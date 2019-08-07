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
    var key = e.which || e.keyCode;

    if (!e.shiftKey && !e.altKey && !e.ctrlKey && // numbers
    key >= 48 && key <= 57 || // Numeric keypad
    key >= 96 && key <= 105 || // Backspace and Tab and Enter
    key == 8 || key == 9 || key == 13 || // Home and End
    key == 35 || key == 36 || // left and right arrows
    key == 37 || key == 39 || // Del and Ins
    key == 46 || key == 45) {// input is VALID
    } else {
      // input is INVALID
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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var acceptedKeys = [// Backspace and Tab and Enter
8, 9, 13, // Home and End
35, 36, // left and right arrows
37, 39, // Ins and Del
45, 46];

var VerifyCode = _react["default"].memo(function (props) {
  var classes = (0, _styles["default"])(props);
  var onChange = props.onChange,
      value = props.value,
      error = props.error,
      helperText = props.helperText;

  var handleKeyDown = function handleKeyDown(e) {
    var key = e.which || e.keyCode;

    if (!(!e.shiftKey && !e.altKey && !e.ctrlKey && // numbers
    key >= 48 && key <= 57 || // Numeric keypad
    key >= 96 && key <= 105 || acceptedKeys.includes(key))) {
      e.preventDefault();
    }
  };

  return _react["default"].createElement(_FormControl["default"], {
    classes: {
      root: classes.formControlRoot
    },
    error: error
  }, _react["default"].createElement("div", {
    className: classes.verifyCodeWrapper
  }, _react["default"].createElement("div", {
    className: classes.verifyCodeContainer
  }, _react["default"].createElement("input", {
    className: classes.verifyCodeInput,
    onKeyDown: handleKeyDown,
    maxLength: "4",
    pattern: "\\d*",
    onChange: onChange,
    value: value,
    autoFocus: true
  }))), helperText && _react["default"].createElement(_FormHelperText["default"], {
    classes: {
      root: classes.helperTextRoot
    }
  }, helperText));
});

var _default = VerifyCode;
exports["default"] = _default;
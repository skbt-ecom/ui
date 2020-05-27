"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _react = _interopRequireDefault(require("react"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _styles = _interopRequireDefault(require("./styles"));

var acceptedKeys = [// Backspace and Tab and Enter
8, 9, 13, // Home and End
35, 36, // left and right arrows
37, 39, // Ins and Del
45, 46];

var VerifyCode = function VerifyCode(props) {
  var classes = (0, _styles["default"])(props);
  var onChange = props.onChange,
      value = props.value,
      error = props.error,
      helperText = props.helperText;

  var handleKeyDown = function handleKeyDown(e) {
    var key = e.which || e.keyCode;

    if (!(!e.shiftKey && !e.altKey && !e.ctrlKey && // numbers
    key >= 48 && key <= 57 || // Numeric keypad
    key >= 96 && key <= 105 || (0, _includes["default"])(acceptedKeys).call(acceptedKeys, key))) {
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
  }))), error && _react["default"].createElement(_FormHelperText["default"], {
    classes: {
      root: classes.errorTextRoot
    }
  }, "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043E\u0434"), helperText);
};

var _default = _react["default"].memo(VerifyCode);

exports["default"] = _default;
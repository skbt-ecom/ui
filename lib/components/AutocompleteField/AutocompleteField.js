"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Autocomplete = _interopRequireDefault(require("@material-ui/lab/Autocomplete"));

var _withSpaceForHelperTxt = _interopRequireDefault(require("../HOCs/withSpaceForHelperTxt"));

var AutocompleteField = function AutocompleteField(_ref) {
  var label = _ref.label,
      error = _ref.error,
      helperText = _ref.helperText,
      fullWidth = _ref.fullWidth,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["label", "error", "helperText", "fullWidth"]);
  return /*#__PURE__*/_react["default"].createElement(_Autocomplete["default"], (0, _extends2["default"])({
    forcePopupIcon: false,
    getOptionLabel: function getOptionLabel(option) {
      return option.label;
    },
    noOptionsText: 'Нет вариантов',
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react["default"].createElement(_TextField["default"], (0, _extends2["default"])({}, params, {
        label: label,
        variant: "outlined",
        error: error,
        helperText: helperText,
        fullWidth: true
      }));
    }
  }, props));
};

var _default = _react["default"].memo((0, _withSpaceForHelperTxt["default"])(AutocompleteField));

exports["default"] = _default;
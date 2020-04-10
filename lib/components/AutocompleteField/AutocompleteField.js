"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Autocomplete = _interopRequireDefault(require("@material-ui/lab/Autocomplete"));

var _withSpaceForHelperTxt = _interopRequireDefault(require("../HOCs/withSpaceForHelperTxt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var AutocompleteField = function AutocompleteField(_ref) {
  var label = _ref.label,
      error = _ref.error,
      helperText = _ref.helperText,
      fullWidth = _ref.fullWidth,
      props = _objectWithoutProperties(_ref, ["label", "error", "helperText", "fullWidth"]);

  return _react["default"].createElement(_Autocomplete["default"], _extends({
    forcePopupIcon: false,
    getOptionLabel: function getOptionLabel(option) {
      return option.label;
    },
    noOptionsText: 'Нет вариантов',
    renderInput: function renderInput(params) {
      return _react["default"].createElement(_TextField["default"], _extends({}, params, {
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
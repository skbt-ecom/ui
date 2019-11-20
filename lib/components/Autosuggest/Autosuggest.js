"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactAutosuggest = _interopRequireDefault(require("react-autosuggest"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _helpers = require("./helpers");

var _withSpaceForHelperTxt = _interopRequireDefault(require("../HOCs/withSpaceForHelperTxt"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function renderInputComponent(inputProps) {
  var classes = inputProps.classes,
      other = _objectWithoutProperties(inputProps, ["classes"]);

  return _react["default"].createElement(_TextField["default"], _extends({
    variant: 'outlined',
    InputProps: {
      classes: {
        input: classes.input
      }
    }
  }, other));
}

function renderSuggestion(suggestion, _ref) {
  var isHighlighted = _ref.isHighlighted;
  return _react["default"].createElement(_MenuItem["default"], {
    component: "div",
    selected: isHighlighted
  }, _react["default"].createElement("div", null, suggestion.value));
}

var EMPTY_VALUE = {
  value: '',
  label: ''
};

var AutoSuggestComponent = _react["default"].memo(function IntegrationAutosuggest(props) {
  var classes = (0, _styles["default"])(props);

  var _useState = (0, _react.useState)(props.value || _objectSpread({}, EMPTY_VALUE)),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      stateSuggestions = _useState4[0],
      setSuggestions = _useState4[1];

  var isSuggestionSelected = (0, _react.useRef)(false); // need to send props.onChange() in onBlur when suggestion not selected

  (0, _react.useEffect)(function () {
    setValue(props.value || {
      value: '',
      label: ''
    });
  }, [props.value]);

  var handleSuggestionsFetchRequested = function handleSuggestionsFetchRequested(_ref2) {
    var value = _ref2.value;
    setSuggestions((0, _helpers.getSuggestions)(props.suggestions, value));
  };

  var handleSuggestionsClearRequested = function handleSuggestionsClearRequested() {
    setSuggestions([]);
  };

  var handleChange = function handleChange(event, _ref3) {
    var newValue = _ref3.newValue;
    isSuggestionSelected.current = false;
    setValue({
      label: newValue,
      value: ''
    });
  };

  var onSuggestionSelected = function onSuggestionSelected(event, _ref4) {
    var suggestion = _ref4.suggestion;
    isSuggestionSelected.current = true;
    props.onChange(suggestion);
  };

  var onBlur = function onBlur(e) {
    if (!isSuggestionSelected.current) {
      props.onChange(_objectSpread({}, EMPTY_VALUE));
    }
  };

  var autosuggestProps = {
    renderInputComponent: renderInputComponent,
    suggestions: stateSuggestions || [],
    onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
    onSuggestionsClearRequested: handleSuggestionsClearRequested,
    getSuggestionValue: _helpers.getSuggestionValue,
    renderSuggestion: renderSuggestion,
    shouldRenderSuggestions: _helpers.shouldRenderSuggestions,
    onSuggestionSelected: onSuggestionSelected
  };

  var label = props.label,
      placeholder = props.placeholder,
      onChange = props.onChange,
      otherInputProps = _objectWithoutProperties(props, ["label", "placeholder", "onChange"]);

  return _react["default"].createElement("div", {
    className: classes.root
  }, _react["default"].createElement(_reactAutosuggest["default"], _extends({}, autosuggestProps, {
    inputProps: _objectSpread({
      classes: classes,
      label: label,
      placeholder: placeholder,
      onChange: handleChange
    }, otherInputProps, {
      value: value.label,
      onBlur: onBlur
    }),
    theme: {
      suggestionsContainer: classes.suggestionsContainer,
      suggestionsList: classes.suggestionsList,
      suggestion: classes.suggestion
    },
    renderSuggestionsContainer: function renderSuggestionsContainer(options) {
      return _react["default"].createElement(_Paper["default"], _extends({}, options.containerProps, {
        square: true
      }), options.children);
    }
  })));
});

var _default = (0, _withSpaceForHelperTxt["default"])(AutoSuggestComponent);

exports["default"] = _default;
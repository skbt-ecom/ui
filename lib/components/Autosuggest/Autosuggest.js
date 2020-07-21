"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _reactAutosuggest = _interopRequireDefault(require("react-autosuggest"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _helpers = require("./helpers");

var _withSpaceForHelperTxt = _interopRequireDefault(require("../HOCs/withSpaceForHelperTxt"));

var _styles = _interopRequireDefault(require("./styles"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach["default"])(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context2; (0, _forEach["default"])(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

function renderInputComponent(inputProps) {
  var classes = inputProps.classes,
      other = (0, _objectWithoutProperties2["default"])(inputProps, ["classes"]);
  return /*#__PURE__*/_react["default"].createElement(_TextField["default"], (0, _extends2["default"])({
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
  return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    component: "div",
    selected: isHighlighted
  }, /*#__PURE__*/_react["default"].createElement("div", null, suggestion.value));
}

var EMPTY_VALUE = {
  value: '',
  label: ''
};

var AutoSuggestComponent = /*#__PURE__*/_react["default"].memo(function IntegrationAutosuggest(props) {
  var classes = (0, _styles["default"])(props);

  var _useState = (0, _react.useState)(props.value || _objectSpread({}, EMPTY_VALUE)),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
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
      otherInputProps = (0, _objectWithoutProperties2["default"])(props, ["label", "placeholder", "onChange"]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement(_reactAutosuggest["default"], (0, _extends2["default"])({}, autosuggestProps, {
    inputProps: _objectSpread(_objectSpread({
      label: label,
      placeholder: placeholder,
      onChange: handleChange
    }, otherInputProps), {}, {
      classes: classes,
      value: value.label,
      onBlur: onBlur
    }),
    theme: {
      suggestionsContainer: classes.suggestionsContainer,
      suggestionsList: classes.suggestionsList,
      suggestion: classes.suggestion
    },
    renderSuggestionsContainer: function renderSuggestionsContainer(options) {
      return /*#__PURE__*/_react["default"].createElement(_Paper["default"], (0, _extends2["default"])({}, options.containerProps, {
        square: true
      }), options.children);
    }
  })));
});

var _default = (0, _withSpaceForHelperTxt["default"])(AutoSuggestComponent);

exports["default"] = _default;
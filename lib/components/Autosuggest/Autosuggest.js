"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = IntegrationAutosuggest;

var _react = _interopRequireWildcard(require("react"));

var _reactAutosuggest = _interopRequireDefault(require("react-autosuggest"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Popper = _interopRequireDefault(require("@material-ui/core/Popper"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _helpers = require("./helpers");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } else { ownKeys(arguments[i]).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(arguments[i], key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function renderInputComponent(inputProps) {
  var classes = inputProps.classes,
      _inputProps$inputRef = inputProps.inputRef,
      _inputRef = _inputProps$inputRef === void 0 ? function () {} : _inputProps$inputRef,
      ref = inputProps.ref,
      other = _objectWithoutProperties(inputProps, ["classes", "inputRef", "ref"]);

  return _react["default"].createElement(_TextField["default"], _extends({
    variant: 'outlined',
    InputProps: {
      inputRef: function inputRef(node) {
        ref(node);

        _inputRef(node);
      },
      classes: {
        input: classes.input
      }
    }
  }, other));
}

function renderSuggestion(suggestion, _ref) {
  var query = _ref.query,
      isHighlighted = _ref.isHighlighted;
  return _react["default"].createElement(_MenuItem["default"], {
    component: "div",
    selected: isHighlighted
  }, _react["default"].createElement("div", null, suggestion.value));
}

function IntegrationAutosuggest(props) {
  var classes = (0, _styles["default"])();

  var _useState = (0, _react.useState)({
    single: props.value || ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      stateSuggestions = _useState4[0],
      setSuggestions = _useState4[1];

  var isSuggestionSelected = (0, _react.useRef)(false); // need to send props.onChange() in onBlur when suggestion not selected

  var _React$useState = _react["default"].useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

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
    setState(_objectSpread({}, state, {
      single: newValue
    }));
  };

  var onSuggestionSelected = function onSuggestionSelected(event, _ref4) {
    var suggestion = _ref4.suggestion;
    isSuggestionSelected.current = true;
    props.onChange(suggestion);
  };

  var onBlur = function onBlur(e) {
    if (!isSuggestionSelected.current) {
      props.onChange(null);
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
      value = props.value,
      otherInputProps = _objectWithoutProperties(props, ["label", "placeholder", "onChange", "value"]);

  return _react["default"].createElement("div", {
    className: classes.root
  }, _react["default"].createElement(_reactAutosuggest["default"], _extends({}, autosuggestProps, {
    inputProps: _objectSpread({
      classes: classes,
      label: label,
      placeholder: placeholder,
      value: state.single,
      onChange: handleChange,
      inputRef: function inputRef(node) {
        setAnchorEl(node);
      }
    }, otherInputProps, {
      onBlur: onBlur
    }),
    theme: {
      suggestionsContainer: classes.suggestionsContainer,
      suggestionsList: classes.suggestionsList,
      suggestion: classes.suggestion
    },
    renderSuggestionsContainer: function renderSuggestionsContainer(_ref5) {
      var containerProps = _ref5.containerProps,
          children = _ref5.children;
      return _react["default"].createElement(_Popper["default"], {
        anchorEl: anchorEl,
        open: Boolean(children),
        className: classes.popper
      }, _react["default"].createElement(_Paper["default"], _extends({
        square: true
      }, containerProps, {
        style: {
          width: anchorEl ? anchorEl.clientWidth : undefined
        }
      }), children));
    }
  })));
}
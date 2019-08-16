"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Autorenew = _interopRequireDefault(require("@material-ui/icons/Autorenew"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _reactAutosuggest = _interopRequireDefault(require("react-autosuggest"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Popper = _interopRequireDefault(require("@material-ui/core/Popper"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _helpers = require("./helpers");

var _getDadata = _interopRequireDefault(require("./getDadata"));

var _debounce = _interopRequireDefault(require("../../utils/debounce"));

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
      isLoading = inputProps.isLoading,
      other = _objectWithoutProperties(inputProps, ["classes", "inputRef", "ref", "isLoading"]);

  return _react["default"].createElement(_TextField["default"], _extends({
    variant: 'outlined',
    InputProps: {
      inputRef: function inputRef(node) {
        ref(node);

        _inputRef(node);
      },
      classes: {
        input: classes.input
      },
      endAdornment: isLoading && _react["default"].createElement(_InputAdornment["default"], {
        position: "end"
      }, _react["default"].createElement(_Autorenew["default"], {
        color: 'primary',
        className: classes.loadingIcon
      }))
    },
    disabled: isLoading
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

var _default = _react["default"].memo(function IntegrationAutosuggest(props) {
  var classes = (0, _styles["default"])();

  var _useState = (0, _react.useState)({
    single: typeof props.value === 'string' ? props.value : ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      stateSuggestions = _useState4[0],
      setStateSuggestions = _useState4[1];

  var _React$useState = _react["default"].useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isLoading = _useState6[0],
      setIsLoading = _useState6[1];

  var isSuggestionSelected = (0, _react.useRef)(false);
  var currentSuggestion = (0, _react.useRef)(null);
  var inputValue = (0, _react.useRef)('');
  var setDebouncedSuggestions = (0, _react.useRef)((0, _debounce["default"])(function (inputValue, dadataOptions) {
    (0, _getDadata["default"])(props.type, inputValue, dadataOptions).then(function (_ref2) {
      var suggestions = _ref2.suggestions;
      setStateSuggestions(suggestions);
    });
  }, 500));
  (0, _react.useEffect)(function () {
    // only when 'fio' type, because no tested in address type
    if (typeof props.value === 'string') {
      setState({
        single: props.value || ''
      });
    }
  }, [props.value]);

  var getSuggestions = function getSuggestions(value) {
    inputValue.current = value.toLowerCase();
    setDebouncedSuggestions.current(inputValue.current, props.dadataOptions);
  };

  var handleSuggestionsFetchRequested = function handleSuggestionsFetchRequested(_ref3) {
    var value = _ref3.value;
    setStateSuggestions(getSuggestions(value));
  };

  var handleSuggestionsClearRequested = function handleSuggestionsClearRequested() {
    if (stateSuggestions && stateSuggestions.length) {
      setStateSuggestions([]);
    }
  };

  var handleChange = function handleChange(event, _ref4) {
    var newValue = _ref4.newValue;
    isSuggestionSelected.current = false;
    setState(_objectSpread({}, state, {
      single: newValue
    }));
  };

  var onSuggestionSelected = function onSuggestionSelected(event, _ref5) {
    var suggestion = _ref5.suggestion;
    var type = props.type,
        dadataOptions = props.dadataOptions;
    isSuggestionSelected.current = true; // spike, because dadata not returns postal code
    // we must do specific query for only one suggestion

    if (type === 'address' && !suggestion.data.postal_code) {
      setIsLoading(true);
      (0, _getDadata["default"])(type, suggestion.unrestricted_value, _objectSpread({}, dadataOptions, {
        count: 1,
        restrict_value: true
      })).then(function (res) {
        currentSuggestion.current = res && res.suggestions && res.suggestions[0];
        props.onChange(currentSuggestion.current);
        setIsLoading(false);
      });
    } else {
      currentSuggestion.current = suggestion;
      props.onChange(currentSuggestion.current);
    }
  };

  var onBlur = function onBlur(e) {
    var type = props.type;

    if (isSuggestionSelected.current) {
      return;
    } // if value not selected from list


    if (state.single) {
      var _value = type === 'fio' ? state.single.trim() : currentSuggestion.current;

      return props.onChange(_value);
    }

    props.onChange(null);
  };

  var autosuggestProps = {
    renderInputComponent: renderInputComponent,
    suggestions: stateSuggestions || [],
    onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
    onSuggestionsClearRequested: handleSuggestionsClearRequested,
    getSuggestionValue: _helpers.getSuggestionValue,
    renderSuggestion: renderSuggestion,
    onSuggestionSelected: onSuggestionSelected
  };

  var label = props.label,
      placeholder = props.placeholder,
      onChange = props.onChange,
      dadataOptions = props.dadataOptions,
      value = props.value,
      otherInputProps = _objectWithoutProperties(props, ["label", "placeholder", "onChange", "dadataOptions", "value"]);

  return _react["default"].createElement("div", {
    className: classes.root
  }, _react["default"].createElement(_reactAutosuggest["default"], _extends({}, autosuggestProps, {
    inputProps: _objectSpread({
      classes: classes,
      label: label,
      placeholder: placeholder,
      value: state.single,
      onChange: handleChange,
      isLoading: isLoading,
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
    renderSuggestionsContainer: function renderSuggestionsContainer(_ref6) {
      var containerProps = _ref6.containerProps,
          children = _ref6.children;
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
});

exports["default"] = _default;
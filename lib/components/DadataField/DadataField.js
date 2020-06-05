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

var _trim = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/trim"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _Autorenew = _interopRequireDefault(require("@material-ui/icons/Autorenew"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _reactAutosuggest = _interopRequireDefault(require("react-autosuggest"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _helpers = require("./helpers");

var _getDadata = _interopRequireDefault(require("./getDadata"));

var _debounce = _interopRequireDefault(require("../../utils/debounce"));

var _withSpaceForHelperTxt = _interopRequireDefault(require("../HOCs/withSpaceForHelperTxt"));

var _styles = _interopRequireDefault(require("./styles"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; (0, _forEach["default"])(_context2 = ownKeys(Object(source), true)).call(_context2, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context3; (0, _forEach["default"])(_context3 = ownKeys(Object(source))).call(_context3, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

function renderInputComponent(inputProps) {
  var classes = inputProps.classes,
      isLoading = inputProps.isLoading,
      other = (0, _objectWithoutProperties2["default"])(inputProps, ["classes", "isLoading"]);
  return /*#__PURE__*/_react["default"].createElement(_TextField["default"], (0, _extends2["default"])({
    variant: 'outlined',
    multiline: true,
    InputProps: {
      classes: {
        input: classes.input
      },
      endAdornment: isLoading && /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
        position: "end"
      }, /*#__PURE__*/_react["default"].createElement(_Autorenew["default"], {
        color: 'primary',
        className: classes.loadingIcon
      }))
    },
    disabled: isLoading
  }, other));
}

function renderSuggestion(suggestion, _ref) {
  var isHighlighted = _ref.isHighlighted;
  return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    component: "div",
    selected: isHighlighted
  }, /*#__PURE__*/_react["default"].createElement("div", null, suggestion.value));
}

var DadataComponent = _react["default"].memo(function IntegrationAutosuggest(props) {
  var classes = (0, _styles["default"])(props);

  var _useState = (0, _react.useState)({
    single: typeof props.value === 'string' ? props.value : ''
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      stateSuggestions = _useState4[0],
      setStateSuggestions = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
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
    setState(_objectSpread(_objectSpread({}, state), {}, {
      single: newValue
    }));
  };

  var onSuggestionSelected = function onSuggestionSelected(event, _ref5) {
    var suggestion = _ref5.suggestion;
    var type = props.type;
    isSuggestionSelected.current = true; // spike, because dadata not returns postal code
    // we must do specific query for only one suggestion

    if (type === 'address' && !suggestion.data.postal_code) {
      setIsLoading(true);
      (0, _getDadata["default"])(type, suggestion.unrestricted_value, {
        count: 1,
        restrict_value: true
      }).then(function (res) {
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
      var _context;

      var _value = type === 'fio' ? (0, _trim["default"])(_context = state.single).call(_context) : currentSuggestion.current;

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
      otherInputProps = (0, _objectWithoutProperties2["default"])(props, ["label", "placeholder", "onChange", "dadataOptions", "value"]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement(_reactAutosuggest["default"], (0, _extends2["default"])({}, autosuggestProps, {
    inputProps: _objectSpread(_objectSpread({
      label: label,
      placeholder: placeholder,
      value: state.single,
      onChange: handleChange,
      isLoading: isLoading
    }, otherInputProps), {}, {
      classes: classes,
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

var _default = (0, _withSpaceForHelperTxt["default"])(DadataComponent);

exports["default"] = _default;
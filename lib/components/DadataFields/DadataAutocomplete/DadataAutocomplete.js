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

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Autocomplete = _interopRequireDefault(require("@material-ui/lab/Autocomplete"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _getDadata = require("../getDadata");

var _useDebounce = _interopRequireDefault(require("../useDebounce"));

var _withSpaceForHelperTxt = _interopRequireDefault(require("../../HOCs/withSpaceForHelperTxt"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; (0, _forEach["default"])(_context2 = ownKeys(Object(source), true)).call(_context2, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context3; (0, _forEach["default"])(_context3 = ownKeys(Object(source))).call(_context3, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var DadataAutocomplete = function DadataAutocomplete(_ref) {
  var type = _ref.type,
      incomingValue = _ref.incomingValue,
      dadataOptions = _ref.dadataOptions,
      onBlur = _ref.onBlur,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["type", "incomingValue", "dadataOptions", "onBlur"]);

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      options = _useState2[0],
      setOptions = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      dadataValue = _useState6[0],
      setDadataValue = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      inputValue = _useState8[0],
      setInputValue = _useState8[1];

  var debouncedInputValue = (0, _useDebounce["default"])(inputValue, 500);
  var isIncameValue = (0, _react.useRef)(false);
  (0, _react.useEffect)(function () {
    var active = true;

    var makeIncameValueActions = function makeIncameValueActions(suggestions) {
      var dataToOnBlur = {
        dadataValue: null,
        inputValue: debouncedInputValue,
        isDadataValueActual: false
      };

      if (suggestions.length) {
        var _suggestions = (0, _slicedToArray2["default"])(suggestions, 1),
            suggestion = _suggestions[0];

        setDadataValue(suggestion);
        dataToOnBlur.dadataValue = suggestion;
        dataToOnBlur.isDadataValueActual = true;
      } else {
        setInputValue(debouncedInputValue);
      } // reset to "false" to prevent useEffect run


      isIncameValue.current = false;
      onBlur(null, dataToOnBlur);
    };

    function fetchData() {
      return _fetchData.apply(this, arguments);
    }

    function _fetchData() {
      _fetchData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _ref2, suggestions;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setIsLoading(true);
                _context.next = 3;
                return (0, _getDadata.getDadata)(type, debouncedInputValue, dadataOptions);

              case 3:
                _ref2 = _context.sent;
                suggestions = _ref2.suggestions;

                if (active) {
                  setOptions(suggestions);

                  if (isIncameValue.current) {
                    makeIncameValueActions(suggestions);
                  }
                }

                setIsLoading(false);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _fetchData.apply(this, arguments);
    }

    if (debouncedInputValue) {
      fetchData();
    }

    return function () {
      active = false;
    };
  }, [debouncedInputValue, type, dadataOptions, onBlur]);
  (0, _react.useEffect)(function () {
    if (incomingValue) {
      isIncameValue.current = true;
      setInputValue(incomingValue);
    }
  }, [incomingValue]);

  var handleBlur = function handleBlur(e) {
    var isDadataValueActual = dadataValue && dadataValue.value === inputValue;
    onBlur(e, {
      dadataValue: dadataValue,
      inputValue: inputValue,
      isDadataValueActual: isDadataValueActual
    });
  };

  return _react["default"].createElement(_Autocomplete["default"], {
    getOptionLabel: function getOptionLabel(option) {
      return option.value || '';
    },
    filterOptions: function filterOptions(x) {
      return x;
    },
    freeSolo: true,
    autoComplete: true,
    disableClearable: true,
    options: options,
    includeInputInList: true,
    loading: isLoading,
    value: dadataValue,
    onChange: function onChange(_, newValue) {
      return setDadataValue(newValue);
    },
    inputValue: inputValue,
    onInputChange: function onInputChange(_, newInputValue) {
      return setInputValue(newInputValue);
    },
    onBlur: handleBlur,
    renderInput: function renderInput(params) {
      return _react["default"].createElement(_TextField["default"], (0, _extends2["default"])({}, props, params, {
        variant: "outlined",
        InputProps: _objectSpread({}, params.InputProps, {
          endAdornment: _react["default"].createElement(_react["default"].Fragment, null, isLoading ? _react["default"].createElement(_CircularProgress["default"], {
            color: "inherit",
            size: 20
          }) : null, params.InputProps.endAdornment)
        })
      }));
    }
  });
};

var _default = _react["default"].memo((0, _withSpaceForHelperTxt["default"])(DadataAutocomplete));

exports["default"] = _default;
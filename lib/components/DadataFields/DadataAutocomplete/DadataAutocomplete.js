"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Autocomplete = _interopRequireDefault(require("@material-ui/lab/Autocomplete"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _getDadata = require("../getDadata");

var _useDebounce = _interopRequireDefault(require("../useDebounce"));

var _withSpaceForHelperTxt = _interopRequireDefault(require("../../HOCs/withSpaceForHelperTxt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DadataAutocomplete = function DadataAutocomplete(_ref) {
  var type = _ref.type,
      incomingValue = _ref.incomingValue,
      dadataOptions = _ref.dadataOptions,
      onBlur = _ref.onBlur,
      props = _objectWithoutProperties(_ref, ["type", "incomingValue", "dadataOptions", "onBlur"]);

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      options = _useState2[0],
      setOptions = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      dadataValue = _useState6[0],
      setDadataValue = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
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
        var _suggestions = _slicedToArray(suggestions, 1),
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
      _fetchData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _ref2, suggestions;

        return regeneratorRuntime.wrap(function _callee$(_context) {
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
      return _react["default"].createElement(_TextField["default"], _extends({}, props, params, {
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
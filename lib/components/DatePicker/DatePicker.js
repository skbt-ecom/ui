"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _pickers = require("@material-ui/pickers");

var _luxon = _interopRequireDefault(require("@date-io/luxon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var defaultMaterialTheme = (0, _styles.createMuiTheme)({
  palette: {
    primary: {
      main: '#003791'
    }
  },
  overrides: {
    MuiOutlinedInput: {
      adornedEnd: {
        paddingRight: 0
      }
    },
    MuiPickersBasePicker: {
      pickerViewLandscape: {
        padding: 0
      },
      pickerView: {
        maxWidth: 248,
        minWidth: 248,
        minHeight: 344,
        justifyContent: 'flex-start'
      }
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        marginTop: 0,
        marginBottom: 0,
        height: 56
      },
      iconButton: {
        padding: 6,
        margin: '0 7px'
      },
      daysHeader: {
        backgroundColor: '#f3f3f3',
        minHeight: 40
      },
      dayLabel: {
        color: '#3e3e3e',
        textTransform: 'capitalize',
        width: 24,
        margin: '0 4px'
      }
    },
    MuiPickersCalendar: {
      transitionContainer: {
        marginTop: 0
      }
    },
    MuiPickersDay: {
      day: {
        width: 24,
        height: 24,
        margin: '8px 4px',
        border: '1px solid transparent',
        '&:hover': {
          backgroundColor: '#f3f3f3',
          borderColor: '#f3f3f3'
        }
      },
      current: {
        borderColor: '#f76a5a'
      },
      daySelected: {
        backgroundColor: '#f76a5a !important',
        borderColor: '#f76a5a !important'
      }
    },
    MuiTypography: {
      body1: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: '23px',
        textTransform: 'capitalize'
      },
      body2: {
        fontSize: 12
      }
    }
  }
});

function DatePicker(props) {
  var label = props.label,
      value = props.value,
      onChange = props.onChange;

  var _useState = (0, _react.useState)(value),
      _useState2 = _slicedToArray(_useState, 2),
      selectedDate = _useState2[0],
      setSelectedDate = _useState2[1];

  function handleDateChange(date) {
    onChange && onChange(date);
    setSelectedDate(date);
  }

  return _react["default"].createElement(_styles.MuiThemeProvider, {
    theme: defaultMaterialTheme
  }, _react["default"].createElement(_pickers.MuiPickersUtilsProvider, {
    utils: _luxon["default"],
    locale: "ru"
  }, _react["default"].createElement(_pickers.KeyboardDatePicker, _extends({}, props, {
    autoOk: true,
    disableToolbar: true,
    format: "dd.MM.yyyy",
    variant: "inline",
    label: label,
    value: selectedDate,
    onChange: handleDateChange,
    KeyboardButtonProps: {
      'aria-label': 'change date'
    },
    inputVariant: "outlined"
  }))));
}

DatePicker.defaultProps = {
  label: 'Выберите дату',
  value: new Date()
};

var _default = _react["default"].memo(DatePicker);

exports["default"] = _default;
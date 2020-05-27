"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _pickers = require("@material-ui/pickers");

var _luxon = _interopRequireDefault(require("@date-io/luxon"));

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
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
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
  }, _react["default"].createElement(_pickers.KeyboardDatePicker, (0, _extends2["default"])({}, props, {
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
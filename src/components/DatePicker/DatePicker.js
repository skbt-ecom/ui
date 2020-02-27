import React, { useState } from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import LuxonUtils from '@date-io/luxon';

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#003791',
    },
  },
  overrides: {
    MuiOutlinedInput: {
      adornedEnd: {
        paddingRight: 0,
      },
    },

    MuiPickersBasePicker: {
      pickerViewLandscape: {
        padding: 0,
      },

      pickerView: {
        maxWidth: 248,
        minWidth: 248,
        minHeight: 344,
        justifyContent: 'flex-start',
      },
    },

    MuiPickersCalendarHeader: {
      switchHeader: {
        marginTop: 0,
        marginBottom: 0,
        height: 56,
      },

      iconButton: {
        padding: 6,
        margin: '0 7px',
      },

      daysHeader: {
        backgroundColor: '#f3f3f3',
        minHeight: 40,
      },

      dayLabel: {
        color: '#3e3e3e',
        textTransform: 'capitalize',
        width: 24,
        margin: '0 4px',
      },
    },

    MuiPickersCalendar: {
      transitionContainer: {
        marginTop: 0,
      },
    },

    MuiPickersDay: {
      day: {
        width: 24,
        height: 24,
        margin: '8px 4px',
        border: '1px solid transparent',

        '&:hover': {
          backgroundColor: '#f3f3f3',
          borderColor: '#f3f3f3',
        },
      },

      current: {
        borderColor: '#f76a5a',
      },

      daySelected: {
        backgroundColor: '#f76a5a !important',
        borderColor: '#f76a5a !important',
      },
    },

    MuiTypography: {
      body1: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: '23px',
        textTransform: 'capitalize',
      },

      body2: {
        fontSize: 12,
      },
    },
  },
});

function DatePicker(props) {
  const { label, value, onChange } = props;
  const [selectedDate, setSelectedDate] = useState(value);

  function handleDateChange(date) {
    onChange && onChange(date);
    setSelectedDate(date);
  }

  return (
    <MuiThemeProvider theme={defaultMaterialTheme}>
      <MuiPickersUtilsProvider utils={LuxonUtils} locale="ru">
        <KeyboardDatePicker
          {...props}
          autoOk
          disableToolbar
          format="dd.MM.yyyy"
          variant="inline"
          label={label}
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          inputVariant="outlined"
        />
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  );
}

DatePicker.defaultProps = {
  label: 'Выберите дату',
  value: new Date(),
};

export default React.memo(DatePicker);

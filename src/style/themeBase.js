import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  props: {
    MuiButton: {
      color: "primary",
      variant: "contained",
    },

    MuiTextField: {
      variant: "outlined",
    },
  },
  overrides: {
    // MuiTextField: {
    //   root: {
    //     minHeight: 78,
    //   },
    // },

    MuiButton: {
      root: {
        paddingTop: 10.5,
        paddingBottom: 10.5,
        fontFamily:
          'Bebas, Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        letterSpacing: 1,
        fontSize: 20,
      },
      outlined: {
        paddingTop: 11,
        paddingBottom: 11,
      },
      contained: {
        boxShadow: "none",
      },
    },

    MuiPickersModal: {
      dialogRoot: {
        minWidth: "auto",
      },
    },

    MuiPickersBasePicker: {
      pickerViewLandscape: {
        padding: 0,
      },

      pickerView: {
        maxWidth: 265,
        minWidth: 265,
        minHeight: 336,
        justifyContent: "flex-start",
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
        margin: "0 7px",
      },

      daysHeader: {
        backgroundColor: "#f3f3f3",
        minHeight: 40,
      },

      dayLabel: {
        color: "#3e3e3e",
        textTransform: "capitalize",
        width: 24,
        margin: "0 4px",
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
        margin: "8px 4px",
      },

      current: {
        color: "rgba(0, 0, 0, 0.87)",
        border: "1px solid transparent",
      },
    },
  },
})

export default theme

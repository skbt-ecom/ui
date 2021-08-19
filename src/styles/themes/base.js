export const themeBase = {
  props: {
    MuiButton: {
      color: "primary",
      variant: "contained",
      size: "large",
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
        fontFamily: "inherit",
        padding: "12px 16px",
      },

      sizeLarge: {
        fontSize: "1rem",
      },

      sizeSmall: {
        fontSize: "0.75rem",
      },

      outlinedSizeLarge: {
        padding: "13px 16px",
      },
      outlined: {
        padding: "11px 16px",
      },
      outlinedSizeSmall: {
        padding: "8.5px 16px",
      },

      containedSizeLarge: {
        padding: "14px 16px",
      },
      contained: {
        boxShadow: "none",

        "&:hover": {
          boxShadow: "none",
        },

        "&:active": {
          boxShadow: "none",
        },
      },
      containedSizeSmall: {
        padding: "9.5px 16px",
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
}

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  buttonContainer: {
    position: "relative",
  },
  bwtContainer: {
    display: "none",
    alignItems: "center",
    boxSizing: "border-box",
    borderRadius: "4px 4px 0px 0px",
    backgroundColor: "#D9E6EF",
    padding: "16px 24px 16px 72px",
    width: "100%",
    height: "64px",
    [theme.breakpoints.up("sm")]: {
      padding: "16px 24px 16px 80px",
      display: "flex",
      justifyContent: "space-between",
    },
  },
  bwtLeft: {
    display: 'flex',
  },
  bwtText: {
    display: "flex",
    alignItems: "center",
    fontFamily: '"Roboto", Arial, Helvetica, sans-serif',
    fontSize: 12,
    lineHeight: "14px",
    color: "#607286",
    "& strong": {
      color: "#292929",
    },
    [theme.breakpoints.down("sm")]: {
      width: 176,
    },
  },
  bwtButton: {
    fontFamily: '"Roboto", Arial, Helvetica, sans-serif',
    fontSize: 12,
    lineHeight: '14px',
    color: '#0a40b3',
    backgroundColor: '#fff',
    border: '1px solid #0a40b3',
    borderRadius: 4,
    padding: '9px 28px',
    cursor: 'pointer',
    outline: 0,
    transition: '.3s',
    '&:hover': {
      backgroundColor: '#0a40b3',
      color: '#fff',
      borderColor: '#0a40b3',
    },
  },

  buttonSteps: {
    background: '#F2F8FC',
    padding: '24px 24px 24px 72px',
    borderRadius: '0 0 4px 4px',
    [theme.breakpoints.up('sm')]: {
      padding: '16px 24px 16px 80px',
    },
  },

  buttonStepsTitle: {
    fontSize: 12,
    marginBottom: 24,
    width: 184,
    display: 'inline-block',

    [theme.breakpoints.up('sm')]: {
      display: 'none',
      width: 'auto',
    },
  },

  stepsList: {
    counterReset: 'num',
  },

  step: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '16px',
    color: '#607286',
    fontSize: '12px',
    lineHeight: '14px',
    position: 'relative',
    width: 184,
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '8px',
      width: 'auto',
    },
    '&:before': {
      position: 'absolute',
      left: -21 - 24,
      content: 'counter(num)',
      counterIncrement: 'num',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      fontSize: 12,
      color: '#fff',
      background: '#9FAFC1',
      marginRight: 12,
      height: 24,
      width: 24,
      [theme.breakpoints.up('sm')]: {
        position: 'static',
        height: 16,
        width: 16,
        borderRadius: 8,
        fontSize: 8,
      },
    },
  },

  buttonSteps: {
    background: "#F2F8FC",
    padding: "24px 24px 24px 72px",
    borderRadius: "0 0 4px 4px",
    [theme.breakpoints.up("sm")]: {
      padding: "16px 24px 16px 80px",
    },
  },

  buttonStepsTitle: {
    fontSize: 12,
    marginBottom: 24,
    width: 184,
    display: "inline-block",

    [theme.breakpoints.up("sm")]: {
      display: "none",
      width: "auto",
    },
  },

  stepsList: {
    counterReset: "num",
  },

  step: {
    display: "flex",
    alignItems: "center",
    paddingBottom: "16px",
    color: "#607286",
    fontSize: "12px",
    lineHeight: "14px",
    position: "relative",
    width: 184,
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "8px",
      width: "auto",
    },
    "&:before": {
      position: "absolute",
      left: -21 - 24,
      content: "counter(num)",
      counterIncrement: "num",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 12,
      fontSize: 12,
      color: "#fff",
      background: "#9FAFC1",
      marginRight: 12,
      height: 24,
      width: 24,
      [theme.breakpoints.up("sm")]: {
        position: "static",
        height: 16,
        width: 16,
        borderRadius: 8,
        fontSize: 8,
      },
    },
  },

  root: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    padding: "12px 24px 12px 17px",
    borderRadius: "4px 4px 0 0",
    border: "1px solid transparent",
    width: "100%",
    backgroundColor: "#D9E6EF",
    "&:hover": {
      backgroundColor: "#f2f8fc",
      borderColor: "transparent",
    },
    '&:active': {
      border: '1px solid #b6ccdb',
      backgroundColor: '#e7f0f6',
    },
  },
  label: {
    fontFamily: '"Roboto", Arial, Helvetica, sans-serif',
    fontSize: 12,
    fontWeight: 400,
    textTransform: "none",
    color: "#0a40b3",
  },
  startIcon: {
    marginRight: 18,
  },
  iconESIA: {
    position: "absolute",
    top: 16,
    left: 24,
  },
  descrBlock: {
    display: "flex",
    padding: "24px 24px 24px 72px",
    alignItems: "center",
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      padding: "16px 24px 32px 80px",
    },
  },
  descrTitle: {
    color: "#000",
    fontWeight: "bold",
    lineHeight: "14px",
    display: "inline-block",
    marginBottom: 4,
  },
  descrText: {
    fontSize: 12,
    lineHeight: "15px",
    color: "#607286",
    fontWeight: 400,
    width: 184,
    [theme.breakpoints.up("sm")]: {
      width: 314,
    },
  },
  secureIcon: {
    position: "absolute",
    left: 24,
  },
}));

export default useStyles;

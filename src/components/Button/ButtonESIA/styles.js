import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'inline-block',
  },
  bwtContainer: {
    display: 'none',
    borderRadius: 4,
    backgroundColor: '#f2f8fc',
    padding: '12px 16px',
    width: 504,
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
  bwtLeft: {
    display: 'flex',
  },
  bwtText: {
    fontFamily: '"Roboto", Arial, Helvetica, sans-serif',
    fontSize: 12,
    lineHeight: '17px',
    color: '#607286',
    margin: '0 0 0 18px',
    '& strong': {
      color: '#292929',
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
  root: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    padding: '12px 24px 12px 17px',
    borderRadius: 4,
    border: '1px solid transparent',
    backgroundColor: '#f2f8fc',
    '&:hover': {
      backgroundColor: '#f2f8fc',
      borderColor: 'transparent',
    },
    '&:active': {
      border: '1px solid #b6ccdb',
      backgroundColor: '#e7f0f6',
    },
  },
  label: {
    textTransform: 'none',
    fontSize: 12,
    fontWeight: 400,
    color: '#0a40b3',
    // color: props => (props.disabled ? '#a1afbf' : '#607286'),
  },
  startIcon: {
    marginRight: 18,
  },
  descrBlock: {
    display: 'flex',
    marginTop: 16,
    alignItems: 'center',
  },
  descrText: {
    fontSize: 10,
    lineHeight: '12px',
    fontWeight: 300,
    color: '#607286',
    width: 208,
    margin: 0,
  },
  secureIcon: {
    paddingTop: 4,
    paddingLeft: 16,
    paddingRight: 24,
  },
}));

export default useStyles;

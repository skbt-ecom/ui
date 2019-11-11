import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'inline-block',
    width: props => (props.fullWidth ? '100%' : 'auto'),
  },
  root: {
    padding: '12px 17px',
    borderRadius: 4,
    border: '1px solid #d2dce3',
    '&:hover': {
      backgroundColor: '#f6fbfe',
      borderColor: '#f6fbfe',
    },
  },
  label: {
    textTransform: 'none',
    fontWeight: 400,
    color: props => (props.disabled ? '#a1afbf' : '#607286'),
  },
  startIcon: {
    marginRight: 18,
  },
  descrBlock: {
    display: 'flex',
    marginTop: 16,
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
});

export default useStyles;

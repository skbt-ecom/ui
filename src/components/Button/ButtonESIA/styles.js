import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
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
});

export default useStyles;

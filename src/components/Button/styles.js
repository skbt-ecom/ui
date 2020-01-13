import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    paddingTop: '11px',
    paddingBottom: '11px',
    fontFamily: '"Bebas", "Roboto", "Helvetica", "Arial", sans-serif',
    letterSpacing: '1px',
    fontSize: '20px',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: props => (props.color === 'secondary' ? '#EC3449' : ''),
    },
    '& span:nth-of-type(1)': {
      '@media not all and (min-resolution:.001dpcm)': {
        '@media': {
          marginTop: '1%',
          marginBottom: '-2%',
        },
      },
    },
  },
  label: {},
});

export default useStyles;

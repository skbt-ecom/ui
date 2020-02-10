import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    paddingTop: '11px',
    paddingBottom: '11px',
    fontFamily: '"Bebas", "Roboto", "Helvetica", "Arial", sans-serif',
    letterSpacing: '1px',
    fontSize: '20px',
    '&:hover': {
      boxShadow: 'none',
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

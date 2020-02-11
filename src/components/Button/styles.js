import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
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

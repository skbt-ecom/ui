import { makeStyles } from '@material-ui/core/styles';

function styles(theme) {
  return {
    root: {
      boxSizing: 'border-box',
      margin: '0 auto',
      boxShadow: '0 10px 34px rgba(0, 0, 0, 0.2)',
      borderRadius: 8,
      backgroundColor: '#fff',
      width: 272,
      height: 304,
      padding: '36px 32px',

      [theme.breakpoints.up('md')]: {
        width: 528,
        height: 336,
        padding: '44px 42px',
      },
    },
  };
}

export default makeStyles(styles);

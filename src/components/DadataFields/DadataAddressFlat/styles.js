import { makeStyles } from '@material-ui/core/styles';

export const useStylesAddressDadata = makeStyles({
  container: { marginBottom: 10 },
});

export const useStylesFlatInfo = makeStyles(theme => ({
  checkbox: {
    marginTop: 8,
  },

  checkboxLabel: {
    fontSize: 13,

    [theme.breakpoints.up('sm')]: {
      fontSize: 16,
    },
  },

  flatField: {
    marginRight: 24,
    width: 128,

    [theme.breakpoints.up('sm')]: {
      marginRight: 32,
      width: 176,
    },
  },

  container: {
    display: 'flex',
    alignItems: 'flex-start',
  },
}));

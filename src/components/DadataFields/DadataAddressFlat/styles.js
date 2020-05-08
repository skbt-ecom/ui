import { makeStyles } from '@material-ui/core/styles';

export const useStylesAddressDadata = makeStyles({
  container: { marginBottom: 10 },
});

export const useStylesFlatInfo = makeStyles(
  {
    checkbox: {
      marginTop: 8,
    },
    flatField: {
      marginRight: 30,
    },
    container: {
      display: 'flex',
      alignItems: 'flex-start',
    },
  },
  { index: 0 }
);

import { makeStyles } from '@material-ui/core/styles';

export const useAddressDadataStyles = makeStyles({
  container: {
    marginBottom: 10,
  },
});
export const useFlatInfoStyles = makeStyles(
  {
    container: {
      alignItems: 'flex-start',
    },
    checkbox: {
      marginTop: 8,
    },
  },
  { index: 1 }
);

import { makeStyles } from '@material-ui/core/styles';
import { getClassesFromProps } from '../../utils';

const useStylesAddressDadata = makeStyles({
  container: { marginBottom: '45px' },
});
const useStylesFlatInfo = makeStyles({
  flatField: { marginRight: '30px' },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
});

const getClasses = props => {
  return {
    addressDadataClasses: props.classes
      ? useStylesAddressDadata(
          getClassesFromProps(props, 'addressDadataClasses')
        )
      : {},
    flatInfoClasses: props.classes
      ? useStylesFlatInfo(getClassesFromProps(props, 'flatInfoClasses'))
      : {},
  };
};

export default getClasses;

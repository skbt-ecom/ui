import React, { useContext } from 'react';
import MaterialButton from '../../../Button';
import { FormContext } from '../../FormContext/Form';

import useStyles from './styles';

const Button = props => {
  const context = useContext(FormContext);
  const classes = useStyles(props);

  const onClick = () => {
    context.onSubmit();
  };

  return (
    <div className={classes.container}>
      <MaterialButton
        color={'primary'}
        fullWidth
        {...props}
        {...classes}
        onClick={onClick}
      />
    </div>
  );
};

export default React.memo(Button);

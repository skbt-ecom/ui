import React, { useContext } from 'react';
import MaterialButton from '../../Button';
import { FormContext } from '../FormContext/Form';

const Button = React.memo(props => {
  const context = useContext(FormContext);

  const onClick = () => {
    context.onSubmit();
  };

  return <MaterialButton color={'primary'} {...props} onClick={onClick} />;
});

export default Button;

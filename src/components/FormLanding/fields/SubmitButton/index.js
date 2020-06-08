import React, { useContext } from 'react';
import MaterialButton from '../../../Button';
import { FormContext } from '../../FormContext/Form';

const Button = ({ classsesComponent, ...props }) => {
  const context = useContext(FormContext);

  const onClick = () => {
    context.onSubmit();
  };

  return (
    <MaterialButton
      color={'primary'}
      fullWidth
      {...props}
      classes={classsesComponent}
      onClick={onClick}
    />
  );
};

export default React.memo(Button);

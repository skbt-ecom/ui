import React, { useContext } from 'react';
import MaterialButton from '../../../Button';
import { FormContext } from '../../FormContext/Form';

import useStyles from './styles';

const Button = ({ classsesComponent, ...props }) => {
  const context = useContext(FormContext);
  const classesWrapper = useStyles(props);
  const onClick = () => {
    context.onSubmit();
  };

  return (
    <div className={classesWrapper.container}>
      <MaterialButton
        color={'primary'}
        fullWidth
        {...props}
        classes={classsesComponent}
        onClick={onClick}
      />
    </div>
  );
};

export default React.memo(Button);

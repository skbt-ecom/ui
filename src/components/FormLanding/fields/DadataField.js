import React from 'react';
import MaterialDadataField from '../../DadataField';
import { Field } from '../FormContext/Field';
import { fioValidator, addressValidator } from '../validators';

import useStyles from './styles';

const fioDefaultProps = {
  label: 'Фамилия Имя Отчество',
  validate: fioValidator,
};

const addressDefaultProps = {
  label: 'Адрес',
  name: 'address',
  validate: addressValidator,
};

const DadataField = React.memo(props => <MaterialDadataField {...props} />);

const WrappedField = props => {
  const classes = useStyles(props);
  const { type } = props;
  const propsByType =
    type === 'fio' ? { ...fioDefaultProps } : { ...addressDefaultProps };

  return (
    <div className={classes.fieldWrapper}>
      <Field {...propsByType} {...props} />
    </div>
  );
};

WrappedField.displayName = 'DadataField';
WrappedField.defaultProps = {
  component: DadataField,
  defaultValue: '',
  validateOnBlur: false,
  fullWidth: true,
};

export default WrappedField;

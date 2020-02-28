import React from 'react';
import MaterialDadataField from '../../DadataField';
import { Field } from '../FormContext/Field';
import { fioValidator } from '../validators/fioValidator';
import { addressValidator } from '../validators/addressValidator';

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
  const { type } = props;
  const propsByType =
    type === 'fio' ? { ...fioDefaultProps } : { ...addressDefaultProps };

  return <Field {...propsByType} {...props} />;
};

WrappedField.defaultProps = {
  component: DadataField,
  defaultValue: '',
  validateOnBlur: false,
  fullWidth: true,
};

export default WrappedField;

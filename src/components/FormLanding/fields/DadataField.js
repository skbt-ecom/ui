import React from 'react';
import MaterialDadataField from '../../DadataField';
import { Field } from '../FormContext/Field';
import { fioValidator } from '../validators/fioValidator';
import { addressValidator } from '../validators/addressValidator';

const fioDefaultProps = {
  label: 'Фамилия Имя Отчество',
  name: 'fio',
  defaultValue: '',
  validate: fioValidator,
  validateOnBlur: false,
  fullWidth,
};

const addressDefaultProps = {
  label: 'Адрес',
  name: 'address',
  defaultValue: '',
  validate: addressValidator,
  validateOnBlur: false,
  fullWidth,
};

const DadataField = React.memo(props => {
  const onChange = data => {
    props.onChange(data);
  };

  return <MaterialDadataField {...props} onChange={onChange} />;
});

const WrappedDadataField = props => {
  const { type } = props;
  const propsByType =
    type === 'fio' ? { ...fioDefaultProps } : { ...addressDefaultProps };

  return <Field {...propsByType} {...props} component={DadataField} />;
};

export default WrappedDadataField;

import React from 'react';
import Checkbox from '../../../Checkbox/Checkbox';
import { Field } from '../../FormContext/Field';
import Link from '../../../Link';

import useStyles from './styles';

const Acceptment = React.memo(props => {
  const classes = useStyles(props);

  const onChange = e => {
    props.onChange(e.target.checked);
  };

  return (
    <Checkbox
      color="primary"
      {...props}
      classes={{
        labelClasses: { label: classes.personalLabel },
        helperTextClasses: { root: classes.helperTextRoot },
      }}
      label={
        <>
          Даю согласие на&nbsp;обработку своих персональных данных
          в&nbsp;соответствии&nbsp;с&nbsp;
          <Link
            href="https://app.sovcombank.ru/policy/"
            target="_blank"
            rel="noopener noreferrer"
            underline={'always'}
          >
            Правилами
          </Link>
        </>
      }
      onChange={onChange}
      checked={props.value}
    />
  );
});

const WrappedField = props => <Field {...props} />;

WrappedField.displayName = 'Acceptment';
WrappedField.defaultProps = {
  component: Acceptment,
  defaultValue: true,
  validateOnBlur: false,
  validate: value => (value ? null : 'Необходимо согласие с условиями'),
};

export default WrappedField;

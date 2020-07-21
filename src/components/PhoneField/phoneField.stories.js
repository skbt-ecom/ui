import React, { useState } from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import PhoneField from './PhoneField';

import theme from '../../style/theme';

const PhoneFieldWrapper = props => {
  const [value, setValue] = useState('');

  const handleChange = value => {
    setValue(value);
    props.onChange(value);
  };

  const handleBlur = fieldName => valueBlur => {
    console.log(fieldName);
    props.onBlur(valueBlur);
  };

  return (
    <PhoneField
      {...props}
      onChange={handleChange}
      value={value}
      onBlur={handleBlur('phone')}
    />
  );
};

storiesOf('PhoneField', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => (
    <PhoneFieldWrapper
      label={'Телефон'}
      onChange={action('onChange')}
      onBlur={action('onBlur')}
      // lazy={false}
      // placeholderChar={' '}
    />
  ));

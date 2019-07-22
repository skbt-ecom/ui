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

  return <PhoneField {...props} onChange={handleChange} value={value} />;
};

storiesOf('PhoneField', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => (
    <PhoneFieldWrapper
      label={'Телефон'}
      onChange={action('onChange')}
      placeholder={'+7(000)000-00-00'}
    />
  ));

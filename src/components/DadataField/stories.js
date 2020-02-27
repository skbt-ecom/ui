import React, { useState } from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import DadataField from './DadataField';

import theme from '../../style/theme';

const DadataFieldWrapper = props => {
  const [value, setValue] = useState('');
  const onChange = value => {
    setValue(value);
    props.onChange(value);
  };
  return (
    <>
      {/* <button onClick={() => setValue('b b b')}>set Value</button> */}
      <DadataField {...props} onChange={onChange} value={value} />
    </>
  );
};

storiesOf('DadataField', module)
  .addDecorator(muiTheme([theme]))
  .add('ФИО', () => (
    <DadataFieldWrapper
      onChange={action('onChange')}
      type={'fio'}
      label={'ФИО'}
    />
  ))
  .add('Адрес', () => (
    <DadataField
      onChange={action('onChange')}
      type={'address'}
      label={'Адрес'}
      dadataOptions={{}}
      fullWidth
    />
  ));

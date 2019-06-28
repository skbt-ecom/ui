import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';

import theme from '../../style/theme';
import './Checkbox/styles.css';

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];

const classesExample = {
  // available classes: https://material-ui.com/api/checkbox/#css
  checkboxClasses: {},
  // available classes: https://material-ui.com/api/form-control-label/#css
  labelClasses: { label: 'my-checkbox-label' },
};

const Label = () => {
  const link = (
    <a
      href="https://app.sovcombank.ru/policy/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Правилами
    </a>
  );
  return (
    <>
      Даю согласие на обработку своих персональных данных в соответствии с{' '}
      {link}
    </>
  );
};

storiesOf('Chekbox', module)
  .addDecorator(muiTheme([theme]))
  .add('Checkbox', () => (
    <>
      <Checkbox
        onChange={action('onChange')}
        label={'Label'}
        color={'primary'}
      />
      <br />
      <Checkbox
        onChange={action('onChange')}
        label={<Label />}
        color={'primary'}
        classes={classesExample}
      />
    </>
  ))
  .add('CheckboxGroup', () => (
    <CheckboxGroup
      onChange={action('onChange')}
      options={options}
      formLabel={{
        label: 'Label',
      }}
    />
  ));

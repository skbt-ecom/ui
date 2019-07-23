import React, { useState } from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import Autosuggest from './Autosuggest';

import theme from '../../style/theme';

import { regions } from './regionEnums';

const AutosuggestFieldWrapper = props => {
  const [value, setValue] = useState(props.value || '');

  const onChange = value => {
    setValue(value);
    props.onChange(value);
  };
  return (
    <>
      {/* <button
        onClick={() =>
          setValue({
            kladr_id: '29',
            value: 'Arhangel',
            label: 'Архангельская область',
          })
        }
      >
        set Value
      </button> */}
      <Autosuggest {...props} onChange={onChange} value={value} />
    </>
  );
};

storiesOf('Autosuggest', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => (
    <>
      <h2>Пример с регионами</h2>
      <AutosuggestFieldWrapper
        onChange={action('onChange')}
        suggestions={regions}
        label={'Регион'}
        fullWidth
        value={regions[0]}
      />
    </>
  ));

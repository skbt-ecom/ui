import React, { useState } from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import AutocompleteField from './AutocompleteField';
import { regions } from './regionEnums';

import theme from '../../style/theme';

const AutosuggestFieldWrapper = props => {
  const [value, setValue] = useState(props.value || null);

  const onChange = (event, value) => {
    setValue(value);
    props.onChange(event, value);
  };
  return (
    <>
      {/* <button
        onClick={() =>
          setValue({
            kladr_id: '29',
            value: 'Архангельская область',
            label: 'Архангельская область',
          })
        }
      >
        set Value
      </button> */}
      <AutocompleteField
        {...props}
        onChange={onChange}
        value={value}
        label={'Регион'}
        classes={{ root: 'ROOT', inputRoot: 'INPUT_ROOOT' }}
        fullWidth
      />
    </>
  );
};

storiesOf('AutocompleteField', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => (
    <AutosuggestFieldWrapper onChange={action('onChange')} options={regions} />
  ));

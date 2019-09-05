import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import Uploader from './Uploader';

import theme from '../../style/theme';

storiesOf('Uploader', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => (
    <Uploader
      errMsg="Не удалось загрузить документ"
      hint="Страница регистрации"
      apiUrl="http://rdc-web-app1-test.bankrc.local/test_api/load_file.php"
    />
  ));

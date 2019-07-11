import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import Stepper from './Stepper';

import theme from '../../style/theme';

const steps = [
  {
    label: 'Ваша заявка принята',
    content: 'Загрузка',
  },
  {
    label: 'Заявка рассматривается',
    content: 'Загрузка',
  },
  {
    label: 'Получено решение',
    content: 'Загрузка',
  },
  {
    label: 'Передано в доставку',
    content: 'Загрузка',
  },
  {
    label: 'Выдано',
    content: 'Загрузка',
  },
];

storiesOf('Stepper', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => <Stepper steps={steps} />);

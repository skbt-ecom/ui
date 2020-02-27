import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import Stepper from './Stepper';

import theme from '../../style/theme';

const stepsVertical = [
  {
    label: 'Ваша заявка принята',
    content: 'Загрузка',
  },
  {
    label: 'Заявка рассматривается',
    content: 'Необходимо добавить следующие документы',
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

const stepsHorizontal = [
  {
    label: 'Паспортные данные',
    content: '+10% к одобрению',
  },
  {
    label: 'Занятость',
    content: '+15% к одобрению',
  },
  {
    label: 'Адрес доставки',
    content: '+20% к одобрению',
  },
];

storiesOf('Stepper', module)
  .addDecorator(muiTheme([theme]))
  .add('Vertical', () => (
    <Stepper steps={stepsVertical} orientation="vertical" />
  ))
  .add('Horizontal', () => <Stepper steps={stepsHorizontal} activeStep={1} />);

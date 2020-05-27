import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import FAQBlock from './Block';
import FAQQuestion from './Question';
import FAQAnswer from './Answer';

import theme from '../../style/theme';

storiesOf('FAQ', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => (
    <>
      <FAQBlock>
        <FAQQuestion>
          Как открыть расчетный счет? Как быстро открыть расчетный счет? Сколько
          стоит? Что нужно для открытия расчетного счета ИП?
        </FAQQuestion>
        <FAQAnswer>Answer here</FAQAnswer>
      </FAQBlock>
      <FAQBlock>
        <FAQQuestion>Question here</FAQQuestion>
        <FAQAnswer>Answer here</FAQAnswer>
      </FAQBlock>
      <FAQBlock>
        <FAQQuestion>Question here</FAQQuestion>
        <FAQAnswer>Answer here</FAQAnswer>
      </FAQBlock>
    </>
  ));

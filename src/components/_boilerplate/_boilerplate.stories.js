import React from 'react';

import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

import Component from './Component';

import theme from '../../style/theme';

export default {
  title: '_boilerplate',
  decorators: [muiTheme([theme])],
};

export function Default() {
  return <Component onChange={action('onChange')} />;
}

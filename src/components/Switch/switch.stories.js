import React from 'react';

import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';
import { makeStyles } from '@material-ui/core/styles';

import Switch from './Switch';

import theme from '../../style/theme';

const useStyles = makeStyles(() => ({
  labelText: {
    fontSize: 16,
  },
}));

export default {
  title: 'Switch',
  decorators: [muiTheme([theme])],
};

export function Default() {
  const classes = useStyles();

  return (
    <Switch
      onChange={action('onChange')}
      label={'Label'}
      classes={{ label: classes.labelText }}
    />
  );
}

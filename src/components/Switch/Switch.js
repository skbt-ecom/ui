import React from 'react';
import Switch from '@material-ui/core/Switch';

const SwitchComponent = props => {
  return <Switch {...props} />;
};

SwitchComponent.defaultProps = {
  color: 'primary',
};

export default SwitchComponent;

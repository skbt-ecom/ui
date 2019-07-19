import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const SwitchComponent = React.memo(({ label, ...props }) => {
  return (
    <FormGroup row>
      <FormControlLabel control={<Switch {...props} />} label={label} />
    </FormGroup>
  );
});

SwitchComponent.defaultProps = {
  color: 'primary',
};

export default SwitchComponent;

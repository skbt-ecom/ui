import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function SwitchComponent(props) {
  const {
    label,
    classes,
    error,
    helperText,
    checked,
    value,
    ...switchProps
  } = props;

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Switch {...switchProps} checked={value} />}
        label={label}
        classes={{ root: classes.root, label: classes.label }}
      />
    </FormGroup>
  );
}

SwitchComponent.defaultProps = {
  color: 'primary',
  classes: {},
};

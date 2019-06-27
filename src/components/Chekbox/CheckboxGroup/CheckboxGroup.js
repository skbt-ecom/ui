import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CheckboxComponent = props => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={true}
          // onChange={handleChange('checkedA')}
          value="checkedA"
        />
      }
      label="Secondary"
    />
  );
};

export default CheckboxComponent;

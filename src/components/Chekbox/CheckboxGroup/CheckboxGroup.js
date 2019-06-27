import React, { useState, useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const renderCheckboxItem = ({ label, value }, handleChange, index) => {
  return (
    <FormControlLabel
      key={index}
      control={<Checkbox onChange={handleChange(value)} value={value} />}
      label={label}
    />
  );
};

const CheckboxGroup = React.memo(props => {
  const { options, error, helperText, formLabel = {}, ...restProps } = props;
  const [checkedOptions, setCheckedOptions] = useState([]);

  useEffect(() => {
    props.onChange(checkedOptions);
  }, [checkedOptions]);

  const handleChange = name => e => {
    if (e.target.checked) {
      setCheckedOptions(prevCheckedOptions => [...prevCheckedOptions, name]);
    } else {
      setCheckedOptions(prevCheckedOptions =>
        prevCheckedOptions.filter(el => el !== name)
      );
    }
  };
  return (
    <FormControl error={error} component="fieldset">
      {formLabel.label && (
        <FormLabel component="legend" className={formLabel.className}>
          {formLabel.label}
        </FormLabel>
      )}
      <FormGroup>
        {options.map((option, index) =>
          renderCheckboxItem(option, handleChange, index)
        )}
      </FormGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
});

export default CheckboxGroup;

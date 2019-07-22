import React, { useState, useRef, useLayoutEffect } from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import useStyles from './styles';

const SelectComponent = React.memo(props => {
  const classes = useStyles(props);
  const [labelWidth, setLabelWidth] = useState(0);
  const inputLabel = React.useRef(null);

  useLayoutEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = e => {
    props.onChange(e);
  };

  const { helperText, error, items, name, value } = props;

  return (
    <FormControl
      variant="outlined"
      className={classes.formControl}
      error={error}
    >
      <InputLabel ref={inputLabel} htmlFor={name}>
        Name
      </InputLabel>
      <Select
        value={value}
        onChange={handleChange}
        name={name}
        input={<OutlinedInput labelWidth={labelWidth} id={name} />}
      >
        {items.map(({ value, label }, i) => (
          <MenuItem key={i} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>Error</FormHelperText>}
    </FormControl>
  );
});

SelectComponent.defaultProps = {
  items: [
    {
      value: '',
      label: '',
    },
  ],
};

export default SelectComponent;

import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './styles';

const RadioBtn = React.memo(props => {
  const classes = useStyles(props);
  const { item, name, selectedValue } = props;

  return (
    <label className={classes.label}>
      <input
        type="radio"
        name={name}
        className={classes.input}
        onChange={props.onChange}
        value={item.value}
        checked={item.value === selectedValue}
      />
      <div className={classes.box}>
        <span>{item.label}</span>
      </div>
    </label>
  );
});

RadioBtn.propTypes = {
  item: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default RadioBtn;

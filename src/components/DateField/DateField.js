import React from 'react';
import MaskedField from '../MaskedField';

const DateField = React.memo(props => {
  return <MaskedField {...props} mask={Date} />;
});

DateField.defaultProps = {
  variant: 'outlined',
};

export default DateField;

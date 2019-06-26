import React from 'react';
import MaskedField from '../MaskedField';

const phoneMask = '+{7}(000)000-00-00';
const PhoneField = React.memo(props => {
  return <MaskedField {...props} mask={phoneMask} />;
});

export default PhoneField;

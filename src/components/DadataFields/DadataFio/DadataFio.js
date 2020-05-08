import React from 'react';
import DadataAutocomplete from '../DadataAutocomplete';

const FioDadata = props => {
  return (
    <DadataAutocomplete
      {...props}
      type={'fio'}

      // onBlur={props.onBlur}
      // incameValue={props.incameValue}
      // error={props.error}
      // helperText={props.helperText}
    />
  );
};

export default React.memo(FioDadata);

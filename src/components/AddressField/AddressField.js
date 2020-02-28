import React, { useState, useCallback, useEffect, useRef } from 'react';

import DadataField from '../DadataField';
import TextField from '../TextField';
import Checkbox from '../Checkbox/Checkbox';
import { useStylesAddressDadata, useStylesFlatInfo } from './styles';

const addFlatInfoToDadata = (dadataValue, flat, isNoFlat) => ({
  ...dadataValue,
  isNoFlat,
  data: {
    ...dadataValue.data,
    flat,
  },
});

const AddressField = React.memo(props => {
  const addressDadataClasses = useStylesAddressDadata(
    props.classes.addressDadataClasses
  );
  const flatInfoClasses = useStylesFlatInfo(props.classes.flatInfoClasses);

  const [addressDadata, setAddressDadata] = useState(null);
  const [flat, setFlat] = useState('');
  const [isNoFlat, setIsNoFlat] = useState(false);
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    if (!addressDadata) {
      return props.onChange(null);
    }
    const sendData = addFlatInfoToDadata(addressDadata, flat, isNoFlat);
    props.onChange(sendData);
  }, [addressDadata, flat, isNoFlat]);

  const handleAddressDadataChange = useCallback(value => {
    setAddressDadata(value);
  }, []);

  const handleFlatChange = useCallback(e => {
    const {
      target: { value },
    } = e;
    setFlat(value);
  }, []);

  const handleNoFlatChange = useCallback(e => {
    const {
      target: { checked },
    } = e;
    setIsNoFlat(checked);
  }, []);

  const addressDadataErrorProps = {
    error: props.error ? Boolean(props.error.addressDadata) : false,
    helperText: props.helperText.addressDadata,
  };
  const flatErrorProps = {
    error: props.error ? Boolean(props.error.flat) : false,
    helperText: props.helperText.flat,
  };

  return (
    <div>
      <div className={addressDadataClasses.container}>
        <DadataField
          onChange={handleAddressDadataChange}
          type={'address'}
          label={'Адрес'}
          dadataOptions={{ to_bound: { value: 'house' } }}
          fullWidth
          {...addressDadataErrorProps}
        />
      </div>
      <div className={flatInfoClasses.container}>
        <TextField
          label={'Квартира'}
          onChange={handleFlatChange}
          value={flat}
          disabled={isNoFlat}
          classes={{
            root: flatInfoClasses.flatField,
          }}
          {...flatErrorProps}
        />
        <Checkbox
          onChange={handleNoFlatChange}
          label={'Нет номера квартиры'}
          color={'primary'}
          checked={isNoFlat}
          classes={{ labelClasses: { root: flatInfoClasses.checkbox } }}
        />
      </div>
    </div>
  );
});

AddressField.defaultProps = {
  helperText: { addressDadata: null, flat: null },
  classes: { addressDadataClasses: {}, flatInfoClasses: {} },
};
export default AddressField;

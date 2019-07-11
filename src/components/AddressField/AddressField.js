import React, { useState, useCallback, useEffect, useRef } from 'react';
import DadataField from '../DadataField';
import TextField from '../TextField';
import Checkbox from '../Chekbox/Checkbox';

const addFlatInfoToDadata = (dadataValue, flat, isNoFlat) => ({
  ...dadataValue,
  isNoFlat,
  data: {
    ...dadataValue.data,
    flat,
  },
});

const AddressField = React.memo(props => {
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
    error: Boolean(props.helperText.addressDadata),
    helperText: props.helperText.addressDadata,
  };
  const flatErrorProps = {
    error: Boolean(props.helperText.flat),
    helperText: props.helperText.flat,
  };

  return (
    <>
      <DadataField
        onChange={handleAddressDadataChange}
        type={'address'}
        label={'Адрес'}
        dadataOptions={{ to_bound: { value: 'house' } }}
        fullWidth
        {...addressDadataErrorProps}
      />
      <TextField
        onChange={handleFlatChange}
        value={flat}
        disabled={isNoFlat}
        {...flatErrorProps}
      />
      <Checkbox
        onChange={handleNoFlatChange}
        label={'Нет номера квартиры'}
        color={'primary'}
        checked={isNoFlat}
      />
    </>
  );
});

AddressField.defaultProps = {
  helperText: { addressDadata: null, flat: null },
};
export default AddressField;

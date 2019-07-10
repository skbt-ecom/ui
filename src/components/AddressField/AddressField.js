import React, { useState, useCallback, useEffect, useRef } from 'react';
import DadataField from '../DadataField';
import TextField from '../TextField';
import Checkbox from '../Chekbox/Checkbox';

const addFlatToDadata = (dadataValue, flat) => ({
  ...dadataValue,
  data: {
    ...dadataValue.data,
    flat,
  },
});

//TODO: use useCallback hook on handleSmth functions
const AddressField = React.memo(props => {
  // console.log('AddressField rerendered');
  const [addressDadata, setAddressDadata] = useState(null);
  const [flat, setFlat] = useState('');
  const [isNoFlat, setIsNoFlat] = useState(false);
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    // console.log('');
    // console.log('===useEffect START===');
    // console.log({ addressDadata, flat, isNoFlat });
    // console.log('===useEffect END===');
    // console.log('');

    if (!addressDadata || isNoFlat) {
      return props.onChange(addressDadata);
    }
    const sendData = addFlatToDadata(addressDadata, flat);
    // console.log('sendData', sendData);
    props.onChange(sendData);
  }, [addressDadata, flat, isNoFlat]);

  const handleAddressDadataChange = useCallback(value => {
    // console.log('handleAddressDadataChange val:', value);
    setAddressDadata(value);
  }, []);

  const handleFlatChange = useCallback(e => {
    const {
      target: { value },
    } = e;
    setFlat(value);
    // console.log('handleFlatChange val:', value);
  }, []);

  const handleNoFlatChange = useCallback(e => {
    const {
      target: { checked },
    } = e;
    setIsNoFlat(checked);
    // console.log('handleNoFlatChange val:', checked);
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

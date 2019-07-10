import React, { useState, useCallback, useEffect } from 'react';
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
  console.log('AddressField rerendered');
  const [addressDadata, setAddressDadata] = useState(null);
  const [flat, setFlat] = useState('');
  const [isNoFlat, setIsNoFlat] = useState(false);

  useEffect(() => {
    console.log('');
    console.log('===useEffect START===');
    console.log({ addressDadata, flat, isNoFlat });
    console.log('===useEffect END===');
    console.log('');

    if (!addressDadata || isNoFlat) {
      return props.onChange(addressDadata);
    }
    const sendData = addFlatToDadata(addressDadata, flat);
    console.log('sendData', sendData);
    props.onChange(sendData);
  });

  const handleDadataFieldChange = useCallback(value => {
    console.log('handleDadataFieldChange val:', value);
    setAddressDadata(value);
  }, []);

  const handleFlatChange = useCallback(e => {
    const {
      target: { value },
    } = e;
    setFlat(value);
    console.log('handleFlatChange val:', value);
  }, []);

  const handleNoFlatChange = useCallback(e => {
    const {
      target: { checked },
    } = e;
    setIsNoFlat(checked);
    console.log('handleNoFlatChange val:', checked);
  }, []);

  return (
    <>
      <DadataField
        onChange={handleDadataFieldChange}
        type={'address'}
        label={'Адрес'}
        dadataOptions={{ to_bound: { value: 'house' } }}
        fullWidth
      />
      <TextField onChange={handleFlatChange} value={flat} disabled={isNoFlat} />
      <Checkbox
        onChange={handleNoFlatChange}
        label={'Нет номера квартиры'}
        color={'primary'}
        checked={isNoFlat}
      />
      <button onClick={() => setFlat('1')}>lol</button>
    </>
  );
});

export default AddressField;

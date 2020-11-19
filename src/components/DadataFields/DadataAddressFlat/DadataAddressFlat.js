import React, { useState, useCallback, useEffect } from "react"

import DadataAddress from "../../DadataFields/DadataAddress"
import TextField from "../../TextField"
import Checkbox from "../../Checkbox/Checkbox"
import { useStylesAddressDadata, useStylesFlatInfo } from "./styles"

const parseIncomingValue = (regexp, incomingValue) => {
  const match = regexp.exec(incomingValue)
  return match
}

const dadataOptions = { to_bound: { value: "house" } }

const DadataAddressFlat = React.memo(({ regexp, incomingValue, onBlur, ...props }) => {
  const addressDadataClasses = useStylesAddressDadata(props.classes.addressDadataClasses)
  const flatInfoClasses = useStylesFlatInfo(props.classes.flatInfoClasses)

  const [dadataAddressData, setDadataAddressData] = useState(null)
  const [flat, setFlat] = useState("")
  const [isNoFlat, setIsNoFlat] = useState(false)

  const [incomingValueWOFlat, setIncomingValueWOFlat] = useState("")

  useEffect(() => {
    if (incomingValue) {
      const parsedIncomingValue = parseIncomingValue(regexp, incomingValue)
      const [, addressWOFlat, flat] = parsedIncomingValue

      setIncomingValueWOFlat(addressWOFlat)
      if (flat) {
        setFlat(flat)
      }
    }
  }, [regexp, incomingValue])

  useEffect(() => {
    if (dadataAddressData) {
      onBlur(null, {
        ...dadataAddressData,
        dadataValue: {
          ...dadataAddressData.dadataValue,
          inputFlat: flat,
          isNoFlat,
        },
      })
    }
  }, [flat, isNoFlat, dadataAddressData, onBlur])

  const handleAddressDadataBlur = useCallback((e, values) => {
    setDadataAddressData(values)
  }, [])

  const addressDadataErrorProps = {
    error: props.error ? Boolean(props.error.addressDadata) : false,
    helperText: props.helperText.addressDadata,
  }
  const flatErrorProps = {
    error: props.error ? Boolean(props.error.flat) : false,
    helperText: props.helperText.flat,
  }

  return (
    <div>
      <div className={addressDadataClasses.container}>
        <DadataAddress
          onBlur={handleAddressDadataBlur}
          type={"address"}
          label={"Адрес"}
          dadataOptions={dadataOptions}
          incomingValue={incomingValueWOFlat}
          fullWidth
          {...addressDadataErrorProps}
        />
      </div>
      <div className={flatInfoClasses.container}>
        <TextField
          label={"Квартира"}
          onChange={e => setFlat(e.target.value)}
          value={flat}
          disabled={isNoFlat}
          classes={{
            root: flatInfoClasses.flatField,
          }}
          {...flatErrorProps}
        />
        <Checkbox
          onChange={e => setIsNoFlat(e.target.checked)}
          label={"Нет номера квартиры"}
          color={"primary"}
          checked={isNoFlat}
          classes={{
            labelClasses: {
              root: flatInfoClasses.checkbox,
              label: flatInfoClasses.checkboxLabel,
            },
          }}
        />
      </div>
    </div>
  )
})

DadataAddressFlat.defaultProps = {
  helperText: { addressDadata: null, flat: null },
  classes: { addressDadataClasses: {}, flatInfoClasses: {} },
  regexp: /(.*?)\s*, кв (\d+(?:[/-]\d+)?)?$/,
}
export default DadataAddressFlat

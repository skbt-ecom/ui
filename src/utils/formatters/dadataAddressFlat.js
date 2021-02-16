const formatDadataAddressFlat = (dadataAddressFlatValue) => {
  const { isNoFlat, inputFlat, ...dadataValues } = dadataAddressFlatValue.dadataValue

  return {
    ...dadataValues,
    data: { ...dadataValues.data, flat: inputFlat },
  }
}

export default formatDadataAddressFlat

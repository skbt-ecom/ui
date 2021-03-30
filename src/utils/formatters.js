export const formatDadataAddress = (data) => (data && data.dadataValue ? data.dadataValue : data)

export function formatDadataAddressFlat(dadataAddressFlatValue) {
  const { isNoFlat, inputFlat, ...dadataValues } = dadataAddressFlatValue.dadataValue

  return {
    ...dadataValues,
    data: { ...dadataValues.data, flat: inputFlat },
  }
}

export const formatDate = (date) => date.replace(/(\d{2}).(\d{2}).(\d{4})/, "$3-$2-$1")

export function formatFIO(dadataFieldValue) {
  const { dadataValue, inputValue, isDadataValueActual } = dadataFieldValue

  if (isDadataValueActual) {
    const { surname, name, patronymic } = dadataValue.data
    return { surname, name, patronymic }
  }

  const [surname, name, patronymic] = inputValue.split(" ")
  return { surname, name, patronymic }
}

export const formatPhone = (phone) => phone.replace("7", "8")

export const formatRegion = (regionObj) => regionObj.value

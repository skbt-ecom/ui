import {
  formatFIO,
  formatPhone,
  formatRegion,
  formatDate,
  formatDadataAddress,
  formatDadataAddressFlat,
} from "../utils/formatters"

const formattersByFieldKey = {
  fio: formatFIO,
  phone: formatPhone,
  region: formatRegion,
  date: formatDate,
  dadataAddress: formatDadataAddress,
  dadataAddressFlat: formatDadataAddressFlat,
}

export default function formatToRequest(values = {}, fieldsType = {}) {
  const result = {}

  Object.keys(values).forEach((fieldKey) => {
    const fieldValue = values[fieldKey] // '26.10.2012' = values['passportDate']
    const fieldType = fieldsType[fieldKey] // 'date' = fieldsType['passportDate']
    const formatter = formattersByFieldKey[fieldType]

    result[fieldKey] = formatter ? formatter(fieldValue) : fieldValue
  })

  return result // {'passportDate': '2012-10-26', ...}
}

import formatFIO from "../utils/formatters/fio"
import formatPhone from "../utils/formatters/phone"
import formatRegion from "../utils/formatters/region"
import formatDate from "../utils/formatters/date"
import formatLocalityAddress from "../utils/formatters/localityAddress"
import formatDadataAddress from "../utils/formatters/dadataAddress"
import formatDadataAddressFlat from "../utils/formatters/dadataAddressFlat"

const formattersByFieldKey = {
  fio: formatFIO,
  phone: formatPhone,
  region: formatRegion,
  date: formatDate,
  localityAddress: formatLocalityAddress,
  dadataAddress: formatDadataAddress,
  dadataAddressFlat: formatDadataAddressFlat,
}

export default function formatFieldsToRequest(values = {}, fieldsType = {}) {
  const result = {}

  Object.keys(values).forEach((fieldKey) => {
    const fieldValue = values[fieldKey] // '26.10.2012' = values['passportDate']
    const fieldType = fieldsType[fieldKey] // 'date' = fieldsType['passportDate']
    const formatter = formattersByFieldKey[fieldType]

    result[fieldKey] = formatter ? formatter(fieldValue) : fieldValue
  })

  return result // {'passportDate': '2012-10-26', ...}
}

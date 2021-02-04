import { requiredValidator } from "./requiredValidator"

const ERROR_TXT = "Выберите значение из списка"

export const organisationValidator = (dadataOrganisation) => {
  const { dadataValue } = dadataOrganisation

  if (!dadataValue || !dadataValue.data) {
    return ERROR_TXT
  }

  if (requiredValidator(dadataValue)) {
    return ERROR_TXT
  }

  return null
}

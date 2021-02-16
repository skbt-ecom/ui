const formatFIO = (dadataFieldValue) => {
  const { dadataValue, inputValue, isDadataValueActual } = dadataFieldValue

  if (isDadataValueActual) {
    const { surname, name, patronymic } = dadataValue.data
    return { surname, name, patronymic }
  }

  const [surname, name, patronymic] = inputValue.split(" ")
  return { surname, name, patronymic }
}

export default formatFIO

export default function splitProps(props) {
  const {
    mask,
    unmask,
    min,
    max,
    thousandsSeparator,
    dispatch,
    lazy,
    placeholderChar,
    incomingValue,
    ...textFieldProps
  } = props

  const imaskProps = {
    mask,
    unmask,
    min,
    max,
    thousandsSeparator,
    dispatch,
    lazy,
    placeholderChar,
    incomingValue,
  }

  return [textFieldProps, imaskProps]
}

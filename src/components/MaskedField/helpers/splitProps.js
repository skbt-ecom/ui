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
  }

  return [textFieldProps, imaskProps]
}

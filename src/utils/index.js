export const getClassesFromProps = (props, className) => {
  const {
    classes: { [className]: classes },
    ...restProps
  } = props
  return { classes, ...restProps }
}

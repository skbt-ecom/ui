import React from "react"
import ModalMaterial from "@material-ui/core/Modal"

const Modal = (props, ref) => {
  return <ModalMaterial {...props} ref={ref} />
}
const ForwardedModal = React.forwardRef(Modal)
export default React.memo(ForwardedModal)

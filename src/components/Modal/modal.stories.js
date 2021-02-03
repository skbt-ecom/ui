import React from "react"

import Modal from "."

const ModalExample = (props) => {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal open={open} onClose={handleClose} {...props} />
    </>
  )
}

const story = {
  title: "Modal",
}
export default story

export function Default() {
  return (
    <ModalExample>
      <div style={{ background: "white", width: "400px", height: "400px" }}>Modal content</div>
    </ModalExample>
  )
}

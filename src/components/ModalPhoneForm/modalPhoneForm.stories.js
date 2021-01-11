import React from "react"

import ModalPhoneForm from "./ModalPhoneForm"

const story = {
  title: "ModalPhoneForm",
}
export default story

export function Default() {
  const [isModalOpen, setOpen] = React.useState(false)

  const handleModalOpen = () => {
    setOpen(true)
  }
  const handleModalClose = () => {
    setOpen(false)
  }

  const handleSubmit = (value) => {
    setTimeout(() => {
      console.log(value)
      setOpen(false)
    }, 500)
  }

  return (
    <>
      <button type="button" onClick={handleModalOpen}>
        Open Modal
      </button>
      <ModalPhoneForm
        isModalOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleSubmit}
      />
    </>
  )
}

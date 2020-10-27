import React from "react"
// Import the storybook libraries
import { storiesOf } from "@storybook/react"
import { muiTheme } from "storybook-addon-material-ui"

// Import our component from this folder
import ModalPhoneForm from "./ModalPhoneForm"

import theme from "../../style/theme"

storiesOf("ModalPhoneForm", module)
  .addDecorator(muiTheme([theme]))
  .add("Default", () => {
    const [isModalOpen, setOpen] = React.useState(false)

    const handleModalOpen = () => {
      setOpen(true)
    }
    const handleModalClose = () => {
      setOpen(false)
    }

    const handleSubmit = value => {
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
  })

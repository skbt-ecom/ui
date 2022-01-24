import React, { useState } from "react"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import Form from "../FormLanding"
import AcceptmentField from "../FormLanding/fields/AcceptmentField"
import SubmitButton from "../FormLanding/fields/SubmitButton"

import CloseIcon from "./CloseIcon"
import useStyles from "./styles"
import PhoneField from "../PhoneField"

const ModalPhoneForm = ({ isModalOpen, onClose, onSubmit, title, subtitle, ...props }) => {
  const styles = useStyles(props)
  const [isLoading, setIsLoading] = useState(false)

  const submitHandler = (value) => {
    onSubmit(value)
    setIsLoading(true)
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={styles.modal}
      open={isModalOpen}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isModalOpen}>
        <div className={styles.wrapper}>
          <button type="button" className={styles.closeButton} onClick={onClose}>
            <CloseIcon />
          </button>
          <div className={styles.container}>
            <h2 className={styles.title}>
              {title || (
                <>
                  Мы одобрим ваш кредит
                  <br />
                  всего за 5 минут
                </>
              )}
            </h2>
            <p className={styles.subTitle}>{subtitle || "Нужен только ваш номер телефона"}</p>
            <Form onSubmit={submitHandler}>
              <PhoneField label="Телефон" name="phone" />
              <AcceptmentField
                name="agree"
                classes={{ fieldWrapperAcceptment: styles.fieldWrapperAcceptment }}
              />
              <div className={styles.buttonWrapper}>
                <SubmitButton color="secondary" disabled={isLoading} className={styles.buttonWidth}>
                  Отправить заявку
                </SubmitButton>
              </div>
            </Form>
          </div>
        </div>
      </Fade>
    </Modal>
  )
}

export default ModalPhoneForm

/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FC } from 'react'
import ActionButtons from '../action-buttons/ActionButtons'
import Popup from '../Popup/Popup'
import ShareableInput from '../shareable/shareable-input/ShareableInput'
import Title from '../title/Title'

import './verifyPopup.scss'

interface VerifyPopupProps {
  closeVerifyPopup: () => void
  openVerifyPopup: () => void
  handleSubmit: (value: any) => void
  confirm: (value: any) => void
  userID?: number | string
  verifyPopupVisible: boolean
  value: string
  handleChange: (code: string) => void
}

const VerifyPopup: FC<VerifyPopupProps> = ({ closeVerifyPopup, verifyPopupVisible,handleSubmit, value, handleChange }) => {


  return (
    <Popup
      className="verifyPopup__container__modal"
      visible={verifyPopupVisible}
      closeModal={closeVerifyPopup}
      modalTitle=""
      footer={null}
    >
      <section className="verifyPopup__container__modal__content">
        <Title
          titleText="Please type your verification code"
          className="verifyPopup__container__modal__content--title"
        />
        <ShareableInput
          name="verify_code"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
        <ActionButtons
          buttonText="Confirm"
          className="config__container__buttons--next"
          onClick={handleSubmit}
        />
      </section>
    </Popup>
  )
}

export default VerifyPopup

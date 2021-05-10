/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-key */
import React, { FC, useState } from 'react'
import ActionButtons from '../../../../action-buttons/ActionButtons'
import Popup from '../../../../Popup/Popup'
import Title from '../../../../title/Title'
import DocumentUploadRequests from '../document-upload-requests/DocumentUploadRequests'
import RequestDocument from './request-document/RequestDocument'
import { requestInfoType } from '../model'
import './uploadPopup.scss'

interface UploadPopupProps {
  closeUploadPopup: () => void
  closeRequestPopup: () => void
  openUploadPopup: () => void
  openRequestPopup: () => void
  visible: boolean
  requestVisible: boolean
  count: number | string
  requestInfo: requestInfoType[]
}

const UploadPopup: FC<UploadPopupProps> = ({
  closeUploadPopup,
  openRequestPopup,
  closeRequestPopup,
  visible,
  requestVisible,
  count,
  requestInfo,
}) => {
  const [_count, _setCount] = useState(1)
  
  const [document, setDocument] = useState(1)

  const onNextClick = () => {
    _setCount(document + 1)
  }

  const onBackClick = () => {
    if (_count > 1) {
      _setCount(_count - 1)
    } else if (_count === 1) {
      closeUploadPopup()
    } else {
      return
    }
  }

  return (
    <Popup
      className="uploadPopup__container__modal"
      visible={visible}
      closeModal={closeUploadPopup}
      modalTitle=""
      footer={null}
    >
      <Title
        titleText={
          count > 1
            ? `Upload Requested Documents (${_count} of ${count})`
            : count === 1
              ? 'Upload Requested Documents'
              : 'Upload Requested Documents'
        }
        level={4}
      />
      <RequestDocument requestInfo={requestInfo} />
      <section className="uploadPopup__container__modal__buttons">
        <div className="uploadPopup__container__modal__buttons__content">
          <span
            className="uploadPopup__container__modal__buttons__content--text"
            onClick={openRequestPopup}
          >
            View All Document Requests
          </span>
        </div>
        <div className="uploadPopup__container__modal__buttons__block">
          {count > 1 ? (
            <>
              <ActionButtons
                buttonText={_count === 1 ? 'Cancel' : 'Back'}
                className="config__container__buttons--cancel"
                onClick={onBackClick}
              />
              <ActionButtons
                buttonText={_count > 1 ? 'Done' : 'Next'}
                className="config__container__buttons--next"
                onClick={onNextClick}
              />
            </>
          ) : count === 1 ? (
            <>
              <ActionButtons
                buttonText="Cancel"
                className="config__container__buttons--cancel"
                onClick={closeUploadPopup}
              />
              <ActionButtons
                buttonText="Done"
                className="config__container__buttons--next"
                onClick={closeUploadPopup}
              />
            </>
          ) : (
            <>
              <ActionButtons
                buttonText="Cancel"
                className="config__container__buttons--cancel"
                onClick={closeUploadPopup}
              />
              <ActionButtons
                buttonText="Next"
                className="config__container__buttons--next"
                onClick={onNextClick}
              />
            </>
          )}
        </div>
      </section>
      <DocumentUploadRequests
        closeRequestPopup={closeRequestPopup}
        requestVisible={requestVisible}
        requestInfo={requestInfo}
      />
    </Popup>
  )
}

export default UploadPopup

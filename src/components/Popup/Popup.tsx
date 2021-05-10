import React, { FC, ReactElement, ReactNode } from 'react'
import Modal from 'antd/lib/modal/Modal'

interface PopupProps {
  className: string
  modalTitle: string
  okButtonText?: string | ReactElement
  cancelButtonText?: string
  visible?: boolean
  closeModal?: () => void
  footer?: null | ReactNode
  mask?: boolean
}

const Popup: FC<PopupProps> = ({
  className,
  visible,
  closeModal,
  children,
  footer,
  modalTitle,
  okButtonText,
  cancelButtonText,
  mask,
}) => {
  return (
    <Modal
      title={modalTitle}
      visible={visible}
      footer={footer}
      centered={false}
      mask={mask}
      onCancel={closeModal}
      className={className}
      okText={okButtonText}
      cancelText={cancelButtonText}
    >
      {children}
    </Modal>
  )
}

export default Popup

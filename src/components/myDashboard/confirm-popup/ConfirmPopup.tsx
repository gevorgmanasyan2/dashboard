import React, { FC, ReactNode } from 'react'
import { Popconfirm } from 'antd'

interface ConfirmPopupProps {
  title?: string
  okText?: string
  cancelText?: string
  children?: ReactNode
  onConfirm?: (value: any) => void
  onCancel?: () => void
}

const ConfirmPopup: FC<ConfirmPopupProps> = ({
  title,
  okText,
  cancelText,
  children,
  onConfirm,
  onCancel,
}) => {
  return (
    <Popconfirm
      title={title}
      okText={okText}
      cancelText={cancelText}
      onConfirm={onConfirm}
      onCancel={onCancel}
    >
      {children}
    </Popconfirm>
  )
}

export default ConfirmPopup

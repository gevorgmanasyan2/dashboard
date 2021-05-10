import { Button } from 'antd'
import React, { FC, ReactElement } from 'react'

interface ActionButtonsProps {
  buttonText: string
  className: string
  buttonType?: boolean
  icon?: ReactElement | null
  onClick?: (value: any) => void
}

const ActionButtons: FC<ActionButtonsProps> = ({ buttonType, buttonText, className, onClick,icon }) => {
  return (
    <Button className={className} disabled={buttonType} onClick={onClick} icon={icon}>
      {buttonText}
    </Button>
  )
}

export default ActionButtons

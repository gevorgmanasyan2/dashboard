import { WarningFilled } from '@ant-design/icons'
import React, { FC } from 'react'
import './development.scss'

const Development: FC = () => {
  return (
    <div className="development__container">
      <WarningFilled />
      <span>{process.env.NODE_ENV}</span>
      <WarningFilled />
    </div>
  )
}

export default Development

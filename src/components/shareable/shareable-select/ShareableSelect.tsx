import React, { FC } from 'react'
import './shareableSelect.scss'
import { Select } from 'antd'
import { SharableProps } from '../models'

const ShareableSelect: FC<SharableProps> = ({ label, value, children, onChange }) => {
  return (
    <div className="shareableSelect__container">
      <label htmlFor="">{label}</label>
      <Select
        defaultValue={value}
        onChange={onChange}
        className="shareableSelect__container--select"
      >
        {children}
      </Select>
    </div>
  )
}

export default ShareableSelect

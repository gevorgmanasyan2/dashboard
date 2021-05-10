import React, { FC } from 'react'
import { Input } from 'antd'
import './shareableInput.scss'
import { SharableProps } from '../models'

const ShareableInput: FC<SharableProps> = ({
  label,
  placeholder,
  value,
  name,
  onChange,
  className,
  onBlur,
  errorsMessage,
  readOnly
}) => {
  return (
    <div className="input__container">
      <label htmlFor="">{label}</label>
      <Input
        className={`input__container--input ${className}`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        onBlur={onBlur}
        readOnly={readOnly}
      />
      {errorsMessage && <div className='input__container--error'>{errorsMessage}</div>}
    </div>
  )
}

export default ShareableInput

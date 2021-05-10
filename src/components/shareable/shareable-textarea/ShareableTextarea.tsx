import React, { FC } from 'react'
import { Input } from 'antd'
import { SharableProps } from '../models'
import './shareableTextarea.scss'

const ShareableTextarea: FC<SharableProps> = ({errorsMessage,className,onBlur, label, value, name, onChange,onKeyDown,autoSize }) => {
  const { TextArea } = Input
  return (
    <div className="textarea__container">
      <label htmlFor="">{label}</label>
      <TextArea
        rows={4}
        className={`textarea__container--textarea ${className}`}
        value={value}
        onBlur={onBlur}
        name={name}
        onChange={onChange}
        onKeyDown={onKeyDown}
        autoSize={autoSize}
      />
      {errorsMessage && <div className='textarea__container--error'>{errorsMessage}</div>}
    </div>
  )
}

export default ShareableTextarea

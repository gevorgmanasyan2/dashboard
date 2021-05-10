import React, { FC } from 'react'
import { Typography } from 'antd'

import './title.scss'

interface TitleProps {
  className?: string
  titleText?: string | boolean
  level?: 5 | 1 | 2 | 3 | 4 | undefined
}

const Title: FC<TitleProps> = ({ level, className, titleText }) => {
  const { Title } = Typography
  return (
    <Title level={level} className={`main-title ${className}`}>
      {titleText}
    </Title>
  )
}

export default Title

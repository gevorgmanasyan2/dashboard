import React, { FC } from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const IsLoading: FC = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 84 }} spin />

  return (
    <>
      <Spin indicator={antIcon} />
    </>
  )
}

export default IsLoading

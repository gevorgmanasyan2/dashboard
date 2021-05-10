/* eslint-disable react/display-name */
import React from 'react'
import { Space } from 'antd'
import './regulatoryPermissions.scss'
import { PlusOutlined } from '@ant-design/icons'
import Title from '../../../title/Title'
import ShareableSelect from '../../../shareable/shareable-select/ShareableSelect'
import Regulatory from '../Regulatory'

const RegulatoryPermissions = () => {
  return (
    <div className="regList__container">
      <header className="regList__container__header">
        <Title titleText="Regulatory Permissions" />
        <div className="regList__container__header--icon">
          <PlusOutlined />
        </div>
      </header>
      <Space style={{ marginBottom: 16 }}>
        <ShareableSelect value={'All Sources'} />
        <ShareableSelect value={'All Assigned Agents'} />
        <ShareableSelect value={'All Waiver Types'} />
        <ShareableSelect value={'Active'} />
      </Space>
      <Regulatory />
    </div>
  )
}

export default RegulatoryPermissions

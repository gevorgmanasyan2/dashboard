import React, { FC } from 'react'

import './searchRegulatoryPermissions.scss'
import Title from '../../../title/Title'
import ShareableInput from '../../../shareable/shareable-input/ShareableInput'
import { PlusOutlined } from '@ant-design/icons'
import Regulatory from '../Regulatory'
import { Pagination } from 'antd'

const SearchRegulatoryPermissions: FC = () => {
  return (
    <article className="searchRegulatory__content">
      <header className="searchRegulatory__content__header">
        <Title titleText="Regulatory Permission"> </Title>
        <div className="searchRegulatory__content__header--icon">
          <PlusOutlined />
        </div>
      </header>
      <div className="searchRegulatory__content--searchInput">
        <ShareableInput placeholder="Search" />
      </div>
      <div className="searchRegulatory__content--regulatory">
        <Regulatory />
      </div>
      <div className="searchRegulatory__content--pagination">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </article>
  )
}

export default SearchRegulatoryPermissions

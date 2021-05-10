import React, { FC, useState } from 'react'

import './searchRegulatoryPermission.scss'
import Title from '../../../title/Title'
import ShareableInput from '../../../shareable/shareable-input/ShareableInput'
import { PlusOutlined } from '@ant-design/icons'
import Regulatory from '../Regulatory'

interface SearchRegulatoryPermissionProps {
  waivers: object[]
}

const SearchRegulatoryPermission: FC<SearchRegulatoryPermissionProps> = () => {
  const [inputValue, setInputValue] = useState<string>('')

  return (
    <article className="searchRegulatory__content">
      <header className="searchRegulatory__content__header">
        <Title titleText="Regulatory Permission"></Title>
        <div className="searchRegulatory__content__header--icon">
          <PlusOutlined />
        </div>
      </header>
      <div className="searchRegulatory__content--searchInput">
        <ShareableInput
          onChange={({ target }) => setInputValue(target.value)}
          value={inputValue}
          placeholder="Search"
        />
      </div>
      <div className="searchRegulatory__content--regulatory">
        <Regulatory inputValue={inputValue}/>
      </div>
      <div className="searchRegulatory__content--pagination">
      </div>
    </article>
  )
}


export default SearchRegulatoryPermission

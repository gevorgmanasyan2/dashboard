import React, { FC, useState } from 'react'
import {  notification } from 'antd'
import RegulatoryLibraryItemDetailPopup from './regulatory-library-item-detail/RegulatoryLibraryItemDetailPopup'
import './regulatoryLibraryItem.scss'

interface RegulatoryLibraryItemProps {
  id: number
  name: string
  waiverLibraryItems?: object[] 
}

const RegulatoryLibraryItem: FC<RegulatoryLibraryItemProps> = ({
  id,
  name,
  waiverLibraryItems,
}) => {
  const [visible, setVisible] = useState<boolean>(false)

  const openDetailModal = () => {
    setVisible(true)
  }

  const closeDetailModal = () => {
    setVisible(!visible)
  }

  const openNotification = () => {
    notification.warning({
      message: 'No Data',
    })
  }

  return (
    <>
      <div className="regulatory__library__item__container" 
        onClick={waiverLibraryItems ? () => openDetailModal() :()=>openNotification()}>
        <div className="regulatory__library__item__container--id">
          <span>0{id}</span>
        </div>
        <div className="regulatory__library__item__container--name">
          <span>{name}</span>
        </div>
      </div>
      <RegulatoryLibraryItemDetailPopup
        closeDetailModal={closeDetailModal}
        visible={visible}
        waiverLibraryItems={waiverLibraryItems}
      />
    </>
  )
}

export default RegulatoryLibraryItem

import React, { FC } from 'react'
import Popup from '../../../../../Popup/Popup'
import WaiverItem from './waiver-item/waiverItem'

interface RegDetailProps {
  waiverLibraryItems?: object[]
  closeDetailModal: () => void
  visible: boolean
}

const RegulatoryLibraryItemDetailPopup: FC<RegDetailProps> = ({
  waiverLibraryItems,
  closeDetailModal,
  visible,
}) => {

  return (
    <Popup
      className="waiver__item__container__modal"
      visible={visible}
      closeModal={closeDetailModal}
      modalTitle="Resource Library Details"
      footer={null}
    >
      {waiverLibraryItems &&
        waiverLibraryItems.map((item: any) => (
          <WaiverItem
            key={item.id}
            name={item.name}
            description={item.description}
            imageSource={item.image_source}
            actionLink={item.action_link}
            fileName={item.download_file}
            externalLink={item.external_link}
          />  
        ))}
    </Popup>
  )
}

export default RegulatoryLibraryItemDetailPopup

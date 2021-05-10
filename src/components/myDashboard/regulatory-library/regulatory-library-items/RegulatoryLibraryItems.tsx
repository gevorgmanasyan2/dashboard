import React, { FC } from 'react'
import './regulatoryLibraryItems.scss'
import RegulatoryLibraryItem from './regulatory-library-item/RegulatoryLibraryItem'

interface RegulatoryLibraryItemsProps {
  waiverCategory?: object[]
}

const RegulatoryLibraryItems: FC<RegulatoryLibraryItemsProps> = ({ waiverCategory }) => {
  return (
    <div className="regulatory__library__items__container">
      {waiverCategory &&
        waiverCategory.map((item: any) => (
          <RegulatoryLibraryItem key={item.id} id={item.id} name={item.name} waiverLibraryItems={item.waiver_library_items}/>
        ))}
    </div>
  )
}

export default RegulatoryLibraryItems

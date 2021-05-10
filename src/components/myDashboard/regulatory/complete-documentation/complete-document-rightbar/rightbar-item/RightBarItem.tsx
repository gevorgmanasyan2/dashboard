import React, {FC} from 'react'

import Title from '../../../../../title/Title'

import './rightBarItem.scss'

interface RightBarItemProps {
  title: string
}

const RightBarItem: FC<RightBarItemProps> = ({title, children}) => {
  return (
    <div className='rightBar__item'>
      <div className='rightBar__item__header'>
        <Title titleText={title} level={5}/>
      </div>
      {children}
    </div>
  )
}

export default RightBarItem
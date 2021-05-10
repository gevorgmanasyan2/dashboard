import React from 'react'
import ActionButtons from '../../../../action-buttons/ActionButtons'

import './getResult.scss'
import Title from '../../../../title/Title'

const GetResult = () => {
  return (
    <div className="get__result__container">
      <div className='get__result__container__info'>
        <Title level={4} titleText='If you received a Request for Information (RFI), please upload it here'/>
        <input type="file"/>
        <div className='get__result__container__button'>
          <ActionButtons buttonText="Upload RFI" className=""/>
        </div>
        <Title level={4} titleText='Let Iris know about the approval status of your application' className='get__result__container__info__application__title' />
        <div className='get__result__container__buttons'>
          <ActionButtons buttonText="Approved" className=""/>
          <ActionButtons buttonText="Request for information" className=""/>
          <ActionButtons buttonText="Rejected" className=""/>
        </div>
      </div>
    </div>
  )
}

export default GetResult

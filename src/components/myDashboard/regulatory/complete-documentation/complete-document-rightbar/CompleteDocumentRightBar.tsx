/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FC } from 'react'
import RightBarItem from './rightbar-item/RightBarItem'
import HistoryPopup from '../history-popup/HistoryPopup'
import moment from 'moment'

import './completeDocumentRightBar.scss'
import { changeLogsType } from '../model'

interface CompleteDocumentRightBarProps {
  openUploadPopup: () => void
  openRequestPopup: () => void
  openHistoryPopup: () => void
  closeHistoryPopup: () => void
  historyVisible: boolean
  count: number | string
  data: changeLogsType[]
}

const CompleteDocumentRightBar: FC<CompleteDocumentRightBarProps> = ({
  openUploadPopup,
  openHistoryPopup,
  closeHistoryPopup,
  openRequestPopup,
  historyVisible,
  count,
  data,
}) => {
  // data = []
  // const recentChanges = data?.slice(0,3)

  return (
    <aside className="rightBar__container">
      <RightBarItem title="Open Document Requests">
        <div className="rightBar__container__item__uploads">
          <div className="rightBar__container__item__uploads__icons">
            <span
              className="rightBar__container__item__uploads__icons--info"
              onClick={count > 0 ? openUploadPopup : () => {}}
            >
              {count}
            </span>
          </div>
          <span className="rightBar__container__item__uploads__viewAll" onClick={count > 0 ?  openRequestPopup : () => {}}>
            View all
          </span>
        </div>
      </RightBarItem>
      <RightBarItem title="Recent Changes">
        <div className="rightBar__container__item__details">
          {data?.map((item: any) => {
            return (
              <div key={item.id} className="rightBar__container__item__details__info">
                <p className="rightBar__container__item__details__info--description">
                  {item.description}
                </p>
                <div className="rightBar__container__item__details__info__user">
                  <span className="rightBar__container__item__details__info__user--userName">
                    {item.edit_by_user_name}
                  </span>
                  <span className="rightBar__container__item__details__info__user--date">
                    {moment.utc(item.created_date).format('YYYY-MM-DD')}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
        <div className="rightBar__container__item__link">
          <span className="rightBar__container__item__link--info" onClick={openHistoryPopup}>
            View all
          </span>
        </div>
      </RightBarItem>
      <HistoryPopup
        openHistoryPopup={openHistoryPopup}
        closeHistoryPopup={closeHistoryPopup}
        historyVisible={historyVisible}
        data={data}
      />
    </aside>
  )
}

export default CompleteDocumentRightBar

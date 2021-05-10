import React, { FC } from 'react'
import Popup from '../../../../Popup/Popup'
import Title from './../../../../title/Title'
import moment from 'moment'

import { Table } from 'antd'

import './historyPopup.scss'
import { changeLogsType } from '../model'

interface HistoryPopupProps {
  closeHistoryPopup: () => void
  openHistoryPopup: () => void
  historyVisible: boolean
  data: changeLogsType[]
}

const HistoryPopup: FC<HistoryPopupProps> = ({ historyVisible, closeHistoryPopup,data }) => {
  const tableData = data?.map((row) => ({
    key: row.id,
    description:row.description,
    name: row.edit_by_user_name,
    date:moment.utc(row.created_date).format('YYYY-MM-DD') 

  }))
  const columns = [
    {
      title: '',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: '',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '',
      dataIndex: 'date',
      key: 'date',
    },
  ]
  return (
    <Popup
      className="uploadPopup__container__modal"
      visible={historyVisible}
      closeModal={closeHistoryPopup}
      modalTitle=""
      footer={null}
    >
      <Title titleText="History" level={4} />
      <Table
        columns={columns}
        dataSource={tableData}
        tableLayout="fixed"
        bordered={true}
        pagination={{ pageSize: 10 }}
      />
    </Popup>
  )
}

export default HistoryPopup

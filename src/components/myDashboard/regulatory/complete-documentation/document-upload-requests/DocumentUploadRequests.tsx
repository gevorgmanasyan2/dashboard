/* eslint-disable react/display-name */
import React, { FC } from 'react'
import Title from './../../../../title/Title'
import { Table, Tag } from 'antd'
import ActionButtons from './../../../../action-buttons/ActionButtons'
import Popup from '../../../../Popup/Popup'
import './documentUploadRequests.scss'

import { useHistory } from 'react-router-dom'
import moment from 'moment'
import { requestInfoType } from '../model'
interface DocumentUploadRequestsProps {
  closeRequestPopup: () => void
  requestVisible: boolean
  requestInfo: requestInfoType[]
}

const DocumentUploadRequests: FC<DocumentUploadRequestsProps> = ({
  closeRequestPopup,
  requestVisible,
  requestInfo
}) => {
  const tableData = requestInfo?.map((row) => ({
    key: row.id,
    name: row.name,
    description: row.description,
    tag: row.questionnaire_response_status_name,
    date: moment.utc(row.created_date).format('YYYY-MM-DD'),
  }))
  const history = useHistory()

  const goBack =() =>{
    history.push('/')
  }
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
    {
      title: '',
      dataIndex: 'tag',
      key: 'tag',
      render: (tag: any) => (
        <Tag color={tag === 'open' ? 'green' : 'geekblue'} key={tag}>
          {tag}
        </Tag>
      ),
    },
  ]

  return (
    <Popup
      className="uploadPopup__container__modal"
      visible={requestVisible}
      closeModal={closeRequestPopup}
      modalTitle=""
      footer={null}
    >
      <Title titleText="Document Upload Requests" className="complete__container__header--title" />
      <p>Summary information about the waiver (name,type,e.t.c)</p>
      <Table columns={columns} dataSource={tableData} />
      <ActionButtons
        buttonText="Return to Regulatory Permissions"
        className="config__container__buttons--return"
        onClick={goBack}
      />
    </Popup>
  )
}

export default DocumentUploadRequests

/* eslint-disable react/display-name */
import React, { FC } from 'react'
import Title from './../../../../../title/Title'
import { Table } from 'antd'
import { DownloadOutlined, InfoCircleOutlined } from '@ant-design/icons'
import moment from 'moment'
import { Link } from 'react-router-dom'
import './uploadedFiles.scss'

interface UploadedFilesProps {
  questFiles: questFilesType[]
  id: number
}

type questFilesType = {
  id: number
  name: string
  created_date: string
  edit_date: string
}

const UploadedFiles: FC<UploadedFilesProps> = ({ questFiles, id }) => {
  const tableData = questFiles?.map((row) => ({
    key: row.id,
    name: row.name,
    created: moment.utc(row.created_date).format('YYYY-MM-DD'),
    edited: moment.utc(row.edit_date).format('YYYY-MM-DD'),
  }))
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Created',
      dataIndex: 'created',
      key: 'created',
    },
    {
      title: 'Edited',
      dataIndex: 'edited',
      key: 'edited',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (record: any, row: any, text: any) => (
        <div className="uploadedFiles__container__content">
          <button className="uploadedFiles__container__content__buttons">
            <span>Download</span>
            <DownloadOutlined />
          </button>
          <Link
            to={{
              pathname: `/complete-document/upload-file-info/${id}`,
              state: { row },
            }}
            className="uploadedFiles__container__content__link"
          >
            <button className="uploadedFiles__container__content__buttons">
              <span>Info</span>
              <InfoCircleOutlined />
            </button>
          </Link>
        </div>
      ),
    },
  ]

  return (
    <div className="uploadedFiles__container">
      <Title className="upload__container__title" level={3} titleText="Upload Files" />
      <Table columns={columns} dataSource={tableData} />
    </div>
  )
}

export default UploadedFiles

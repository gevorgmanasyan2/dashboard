import React from 'react'
import { useLocation } from 'react-router-dom'
import Title from '../../../../../../title/Title'
import { DownloadOutlined } from '@ant-design/icons'
import './uploadedFilesInfo.scss'

const UploadedFilesInfo = () => {
  const location = useLocation()
  const { row }: any = location.state
  return (
    <div className="uploadFileInfo__container">
      <Title titleText={row.name} />
      <ul className="uploadFileInfo__container__content">
        <li>
          <strong>Waiver:</strong>
        </li>
        <li>
          <strong>Waiver Type:</strong>
        </li>
        <li>
          <strong>Waiver Questionnaire:</strong>
        </li>
        <li>
          <strong>Filename:</strong>{row.name}
        </li>
        <li>
          <strong>Created:</strong>{row.created}
        </li>
        <li>
          <strong>Edited:</strong>
          {row.edited}
        </li>
      </ul>
      <DownloadOutlined /> Download File
    </div>
  )
}

export default UploadedFilesInfo

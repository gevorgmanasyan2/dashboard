import { CloudUploadOutlined } from '@ant-design/icons'
import React, { FC } from 'react'
import Title from './../../../../../title/Title'
import { message, Upload } from 'antd'
import ActionButtons from '../../../../../action-buttons/ActionButtons'
import moment from 'moment'
import { requestInfoType } from '../../model'
import { useSelector } from 'react-redux'
import { waiverUploadFilesAPI, baseAPIURL } from './../../../../../../api/constants'
import { RootState } from '../../../../../../redux/rootReducer'

interface RequestDocumentProps {
  requestInfo: requestInfoType[]
}

const RequestDocument: FC<RequestDocumentProps> = ({ requestInfo }) => {
  const { Dragger } = Upload
  const auth = useSelector((state: RootState) => state.auth.isLoggedIn)
  const token = useSelector((state: RootState) => state.auth.sessionToken?.token)

  const waiverID = requestInfo && requestInfo[0].waiver_id
  const waiverRequestID = requestInfo && requestInfo[0].id

  const uploadUrl = `${auth}` ? `${baseAPIURL}${waiverUploadFilesAPI}${waiverID}/${waiverRequestID}` : `${waiverID}`

  const props = {
    name: 'file_input',
    multiple: true,
    action: uploadUrl,
    headers: {
      Authorization: token || ''
    },

    onChange(info: any) {
      const { status } = info.file
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
  }

  return (
    <section className="uploadPopup__container__modal__content">
      <div className="uploadPopup__container__modal__content__info">
        <p>Please upload the .KML file for your mission</p>
        {requestInfo &&
          requestInfo.map((request: any) => {
            return (
              <p key={request.id}>{`Requested by ${request.created_by_user_name}, ${moment
                .utc(request.created_date)
                .format('YYYY-MM-DD')}`}</p>
            )
          })}
      </div>
      <Dragger className="uploadPopup__container__modal__content__upload--button" {...props}>
        <div className="uploadPopup__container__modal__content__upload">
          <Title titleText="Upload Document" level={3} />
          <CloudUploadOutlined />
          <ActionButtons
            buttonText="Choose files to upload"
            className="config__container__buttons--next"
          ></ActionButtons>
          <p>or drag and drop here</p>
        </div>
      </Dragger>
    </section>
  )
}

export default RequestDocument

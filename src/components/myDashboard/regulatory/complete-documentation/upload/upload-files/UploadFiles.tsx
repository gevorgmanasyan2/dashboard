import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import Title from './../../../../../title/Title'
import { docsType } from '../../model'
import { uploadQuestionnaireFile } from '../../../../../../redux/waiver/actions'
import './uploadFiles.scss'

interface UploadFilesProps {
  docsData: docsType
  questName?: string
  questId: number | string
  id: number 
}

const UploadFiles: FC<UploadFilesProps> = ({ docsData,questName,questId,id }) => {
    
  const dispatch = useDispatch()
  const handleUpload = () => {
    dispatch(uploadQuestionnaireFile(`${id}/${questId}`))
  }

  return (
    <div className="uploadFiles__container">
      <Title
        className="uploadFiles__container__title"
        level={3}
        titleText={`Upload Waiver Questionnaire Files:${docsData?.name}:${questName}`}
      />

      <div className="uploadFiles__container__content">
        <p>
          Upload documents for Upload Aircraft.If you upload a file with the same name as a
          previously uploaded file, the previous file will be replaced with the new one
        </p>
      </div>
      <div className="uploadFiles__container_content">
        <input type="file" />
      </div>
      <div className="uploadFiles__container__content__footer">
        <button className="uploadFiles__container__content__footer--button" onClick={handleUpload}>
          Upload
        </button>
      </div>
    </div>
  )
}

export default UploadFiles

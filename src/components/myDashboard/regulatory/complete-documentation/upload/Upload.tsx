import React, { FC, useEffect } from 'react'
import UploadFiles from './upload-files/UploadFiles'
import UploadedFiles from './uploaded-files/UploadedFiles'
import { useLocation, useParams } from 'react-router-dom'
import { useDispatch, connect } from 'react-redux'
import { fetchQuestionnaireFiles } from './../../../../../redux/waiver/actions'
import './upload.scss'

interface UploadProps {
    questFiles: questFilesType[]
  }
  
  type questFilesType = {
    id: number
    name: string
    created_date: string
    edit_date: string
  
  }
const Upload: FC<UploadProps> = ({ questFiles }) => {
  const dispatch = useDispatch()
  const { id }: any = useParams()
  const location = useLocation()
  const { docsData }: any = location.state
  const { questionnaireIdx }: any = location.state
  const questId = docsData.questionnaires[questionnaireIdx].id
    
  useEffect(() => {
    dispatch(fetchQuestionnaireFiles(id, questId))
  }, [dispatch,id, questId])
    
  return (
    <div className="upload__container">
      <UploadFiles
        docsData={docsData}
        questName={docsData.questionnaires[questionnaireIdx].name}
        questId={questId}
        id={id}
      />
      <UploadedFiles questFiles={questFiles} id={id}/>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    questFiles: state.waiver.questionnaireFiles,
  }
}

export default connect(mapStateToProps)(Upload)

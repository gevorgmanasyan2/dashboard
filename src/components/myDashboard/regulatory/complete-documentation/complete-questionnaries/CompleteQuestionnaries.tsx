/* eslint-disable @typescript-eslint/camelcase */
import React, { FC, ReactNode, useState } from 'react'
import Title from '../../../../title/Title'
import { CheckOutlined, RightOutlined, UndoOutlined } from '@ant-design/icons/lib/icons'
import { questionnairesType } from '../model'

import './completeQuestionnaires.scss'
import { useDispatch } from 'react-redux'
import { fetchWaiverDocument, updateStatus } from '../../../../../redux/waiver/actions'
import { useParams } from 'react-router-dom'
import IsLoading from './../../../../../spinner/IsLoading'

interface CompleteQuestionnairesProps {
  checkIcon?: ReactNode
  name?: string
  noteIcon?: ReactNode
  status?: string
  id?: string | number
  questionnaires: questionnairesType
  isLoading?: boolean
}
const CompleteQuestionnaires: FC<CompleteQuestionnairesProps> = ({
  name,
  noteIcon,
  status,
  questionnaires,
  isLoading,
}) => {
  const [iconStatus, setIconStatus] = useState(false)
  const statusID = questionnaires.questionnaire_response_status_id
  const dispatch = useDispatch()

  const { id }: any = useParams()

  const handleChangeStatus = async (statusID: number) => {
    const params = {
      waiver_id: id,
      questionnaire_id: questionnaires.id,
      questionnaire_response_status_id: statusID,
    }
    dispatch(updateStatus(params))
    dispatch(fetchWaiverDocument(id))
    setIconStatus(!iconStatus)
  }

  return (
    <section className="complete__questionnaires">
      <div className="complete__questionnaires__content">
        <Title titleText={name} level={3} className="complete__questionnaires__content--title" />
        <div className="complete__questionnaires__content__icons">
          {isLoading && isLoading ? (
            <IsLoading />
          ) : (
            <>
              <span
                className={
                  status === 'complete'
                    ? 'complete__questionnaires__content__icons--statusCompleted'
                    : 'complete__questionnaires__content__icons--status'
                }
              >
                {status}
              </span>
              <div>
                {status === 'complete' ? (
                  <CheckOutlined style={{ color: 'white', fontSize: 16 }} />
                ) : (
                  noteIcon
                )}
              </div>
              <div>
                {statusID === 4 ? (
                  <CheckOutlined style={{ color: 'white', fontSize: 16 }} />
                ) : statusID === 1 ? (
                  <RightOutlined
                    style={{ color: 'white', fontSize: 16 }}
                    onClick={() => handleChangeStatus(2)}
                  />
                ) : (
                  <UndoOutlined
                    style={{ color: 'white', fontSize: 16 }}
                    onClick={() => handleChangeStatus(1)}
                  />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default CompleteQuestionnaires

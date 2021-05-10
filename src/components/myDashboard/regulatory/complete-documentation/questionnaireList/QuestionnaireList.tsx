import { BellOutlined, MessageOutlined } from '@ant-design/icons'
import React, { FC, useEffect } from 'react'
import ShareableSelect from '../../../../shareable/shareable-select/ShareableSelect'
import { Progress, Select } from 'antd'
import ActionButtons from '../../../../action-buttons/ActionButtons'
import Title from './../../../../title/Title'
import { connect, useDispatch } from 'react-redux'
import { fetchQuestionnaireQuestions } from '../../../../../redux/waiver/actions'
import './questionnaireList.scss'
import { useLocation, useParams } from 'react-router-dom'

interface QuestionnaireListProps {
  questions: questionsType[]
}

type questionsType = {
  id: number
  name: string
}

const QuestionnaireList: FC<QuestionnaireListProps> = ({ questions }) => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { id }: any = useParams()
  const { Option } = Select
  const { docsData }: any = location.state
  const { questionnaireIdx }: any = location.state
  const questId = docsData.questionnaires[questionnaireIdx].id

  useEffect(() => {
    dispatch(fetchQuestionnaireQuestions(id, questId))
  }, [dispatch, id, questId])

  return (
    <article className="questionnaireList__container">
      <Title titleText="Questionnaire page" className="questionnaireList__container--title" />
      <section className="questionnaireList__container__header">
        <div className="questionnaireList__container__header--title">Question1</div>
        <div className="questionnaireList__container__header__icons">
          <MessageOutlined className="questionnaireList__container__header__icons--messageIcon" />
          <BellOutlined className="questionnaireList__container__header__icons--bellIcon" />
        </div>
      </section>
      <section className="questionnaireList__container__info">
        <p>Choose you aircraft from the list</p>
        <p>Specify which aircraft you will user on your missions</p>
      </section>
      <ShareableSelect placeholder="Select Answer" className="questionnaireList__container__select">
        <Option value="Select Answer">Select Answer</Option>
        <Option value="Select Answer2">Select Answer</Option>
        <Option value="Select Answer3">Select Answer</Option>
      </ShareableSelect>
      <section className="questionnaireList__container__buttons">
        <ActionButtons buttonText="Cancel" className="config__container__buttons--cancel" />
        <ActionButtons buttonText="Save for Later" className="config__container__buttons--next" />
        <ActionButtons
          buttonText="Submit for review"
          className="config__container__buttons--next"
        />
      </section>
      <section className="questionnaireList__container__progress">
        <Progress percent={20} showInfo={false} />
        <p>2 of 10 answered</p>
      </section>
    </article>
  )
}
const mapStateToProps = (state: any) => {
  return {
    questions: state.waiver.questionnaireQuestions,
  }
}

export default connect(mapStateToProps)(QuestionnaireList)

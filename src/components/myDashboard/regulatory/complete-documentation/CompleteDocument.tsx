/* eslint-disable @typescript-eslint/camelcase */
import React, { FC, useEffect, useState } from 'react'
import './completeDocument.scss'
import Title from '../../../title/Title'
import {
  CheckCircleFilled,
  DownloadOutlined,
  EllipsisOutlined,
  ExportOutlined,
  FolderOpenOutlined,
  Loading3QuartersOutlined,
  MessageOutlined,
  SendOutlined,
  UnorderedListOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import CompleteDocumentHeader from './complete-document-header/CompleteDocumentHeader'
import Badge from '../../../badge/Badge'
import CompleteDocumentRightBar from './complete-document-rightbar/CompleteDocumentRightBar'
import { Progress } from 'antd'
import CompleteQuestionnaires from './complete-questionnaries/CompleteQuestionnaries'
import UploadPopup from './upload-popup/UploadPopup'
import { Link, useParams } from 'react-router-dom'
import DocumentUploadRequests from './document-upload-requests/DocumentUploadRequests'
import Popup from '../../../Popup/Popup'
import { fetchMessages, sendMessage } from '../../../../redux/messages/actions'
import { connect, useDispatch } from 'react-redux'
import { Input } from 'antd'
import Messages from './message/messages/Messages'
import SubmitWaiver from './submit-waiver/SubmitWaiver'
import GetResult from './get-result/GetResult'
import { fetchWaiverDocument } from './../../../../redux/waiver/actions'
import { docsType } from './model'
import IsLoading from '../../../../spinner/IsLoading'

interface CompleteDocumentProps {
  isLoading?: boolean
  docsData: docsType
}

const CompleteDocument: FC<CompleteDocumentProps> = ({ isLoading, docsData }) => {
  const stages = docsData?.stages
  const changeLogsData = docsData?.change_logs
  const count = docsData?.waiver_requests.length
  const requestInfo = docsData?.waiver_requests
  const percent = docsData?.percent_completion

  const [openedChat, setOpenedChat] = useState(false)
  const [chatMessage, setChatMessage] = useState('')
  const [summaryInfo, setSummaryInfo] = useState<string>('')
  const [stageId, setStageId] = useState<number | string>(0)
  const [visible, setVisible] = useState<boolean>(false)
  const [requestVisible, setRequestVisible] = useState<boolean>(false)
  const [historyVisible, setHistoryVisible] = useState<boolean>(false)

  const { id }: any = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMessages(id))
    dispatch(fetchWaiverDocument(id))
  }, [dispatch, id])

  const submitChatMessage = (e?: any) => {
    e.preventDefault()
    if (chatMessage.trim()) {
      dispatch(sendMessage({ waiver_id: id, name: chatMessage }))
      setChatMessage('')
    }
  }

  const onChatKeyDown = (e: any) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault()
      submitChatMessage(e)
    }
  }

  const { TextArea } = Input

  const toggleChat = () => {
    setOpenedChat(!openedChat)
  }

  const closeChat = () => {
    setOpenedChat(false)
  }

  const openUploadPopup = () => {
    setVisible(true)
  }

  const closeUploadPopup = () => {
    setVisible(!visible)
  }
  const openHistoryPopup = () => {
    setHistoryVisible(true)
  }

  const closeHistoryPopup = () => {
    setHistoryVisible(!historyVisible)
  }

  const openRequestPopup = () => {
    setRequestVisible(true)
  }

  const closeRequestPopup = () => {
    setRequestVisible(!requestVisible)
  }

  // useEffect(() => {
  //   if (window.performance) {
  //     if (performance.navigation.type === performance.navigation.TYPE_RELOAD || auth) {
  //     }
  //   }
  // }, [auth])

  const changeIndex = (index: number) => {
    setStageId(index)
    if (+index === 1) {
      setSummaryInfo('Initial Review')
    } else if (+index === 2) {
      setSummaryInfo('Complete Documentation')
    } else if (+index === 3) {
      setSummaryInfo('Risk Assessment')
    } else if (+index === 4) {
      setSummaryInfo('Submit Waiver')
    } else if (+index === 5) {
      setSummaryInfo('Get Result')
    }
  }

  useEffect(() => {
    changeIndex(+docsData?.stage_id)
  }, [docsData])

  return (
    <>
      {isLoading ? (
        <IsLoading />
      ) : (
        <article className="complete__container">
          <header className="complete__container__header">
            <Title
              titleText={`Regulatory permission:  ${!summaryInfo ? '' : summaryInfo}`}
              className="complete__container__header--title"
            />
            <div className="complete__container__header__content">
              <div className="complete__container__header__content--icon">
                <MessageOutlined onClick={toggleChat} style={{ fontSize: 58 }} />
                <Badge count={docsData?.unread_message_count} size="small" />
              </div>
              <div className="complete__container__header__content__right">
                <Progress type="circle" percent={percent} width={60} />
              </div>
            </div>
          </header>
          <Title titleText={'Summary information about the waiver (name, type, etc.)'} level={4} />
          <section className="complete__container__doc__header">
            {stages &&
              Object.values(stages).map((stage: any, index) => {
                const tooltip = (
                  <>
                    <p>{stage.title}</p>
                    <p>{stage.title_description}</p>
                  </>
                )
                return (
                  <CompleteDocumentHeader
                    key={index}
                    id={index}
                    value={stage.value}
                    date={stage.header_text}
                    tooltip={tooltip}
                    bgColor={
                      stage.badge_style === 'success'
                        ? '#26A744'
                        : stage.badge_style === 'secondary'
                          ? '#6B757D'
                          : '#FFC10F'
                    }
                    icon={
                      stage.title === 'Completed' ? (
                        <CheckCircleFilled />
                      ) : stage.title === 'Not Started' ? (
                        <EllipsisOutlined />
                      ) : (
                        <Loading3QuartersOutlined />
                      )
                    }
                    onClick={() => changeIndex(index + 1)}
                  />
                )
              })}
          </section>
          <main className="complete__container__main">
            <div className="complete__container__main__content">
              <Title titleText={`Application Process: ${summaryInfo}`} level={2} />

              {(stageId === 1 && docsData && docsData.questionnaires[0].stage_id === stageId) ||
              (stageId === 2 && docsData && docsData.questionnaires[0].stage_id === stageId) ||
              (stageId === 3 && docsData && docsData.questionnaires[0].stage_id === stageId) ? (
                  <>
                    <div className="complete__container__main__content--questionnaires">
                      {docsData &&
                      docsData?.questionnaires.map((quest: any, i) => {
                        const icon = () => {
                          switch (quest.questionnaire_type_id) {
                          case 1:
                            return (
                              <a target="blank" href={quest.external_link}>
                                <UnorderedListOutlined style={{ color: 'white', fontSize: 16 }} />
                              </a>
                            )
                          case 2:
                            return (
                              <Link
                                to={{
                                  pathname: `/complete-document/upload/${id}`,
                                  state: {
                                    docsData,
                                    questionnaireIdx: i,
                                  },
                                }}
                              >
                                <UploadOutlined style={{ color: 'white', fontSize: 16 }} />
                              </Link>
                            )
                          case 3:
                            return (
                              <Link
                                to={{
                                  pathname: `/complete-document/questionnaire/${id}`,
                                  state: {
                                    docsData,
                                    questionnaireIdx: i,
                                  },
                                }}
                              >
                                <FolderOpenOutlined style={{ color: 'white', fontSize: 16 }} />
                              </Link>
                            )
                          case 4:
                            return <DownloadOutlined style={{ color: 'white', fontSize: 16 }} />
                          case 5:
                            return <ExportOutlined style={{ color: 'white', fontSize: 16 }} />
                          default:
                            return null
                          }
                        }
                        return (
                          <CompleteQuestionnaires
                            key={quest.id}
                            id={quest.questionnaire_type_id}
                            name={quest.name}
                            noteIcon={icon()}
                            status={quest.questionnaire_response_status_name}
                            questionnaires={quest}
                            isLoading={isLoading}
                          />
                        )
                      })}
                    </div>
                  </>
                ) : Number(stageId) === 4 ? (
                  <SubmitWaiver />
                ) : Number(stageId) === 5 ? (
                  <GetResult />
                ) : (
                  <></>
                )}
            </div>
            <CompleteDocumentRightBar
              openUploadPopup={openUploadPopup}
              count={count}
              openHistoryPopup={openHistoryPopup}
              openRequestPopup={openRequestPopup}
              closeHistoryPopup={closeHistoryPopup}
              historyVisible={historyVisible}
              data={changeLogsData}
            />
          </main>
          <Popup
            closeModal={closeChat}
            visible={openedChat}
            className={'chatPopup'}
            modalTitle={'Message your Iris Agent'}
            mask={false}
            footer={
              <form onSubmit={submitChatMessage} className="chatPopup__input__container" key="1">
                <TextArea
                  value={chatMessage}
                  onKeyDown={onChatKeyDown}
                  onChange={({ target: { value } }) => setChatMessage(value)}
                  autoSize={{ maxRows: 3 }}
                />
                <SendOutlined onClick={submitChatMessage} />
              </form>
            }
          >
            <Messages />
          </Popup>
          <UploadPopup
            closeUploadPopup={closeUploadPopup}
            closeRequestPopup={closeRequestPopup}
            requestVisible={requestVisible}
            openUploadPopup={openUploadPopup}
            openRequestPopup={openRequestPopup}
            visible={visible}
            count={count}
            requestInfo={requestInfo}
          />
          <DocumentUploadRequests
            closeRequestPopup={closeRequestPopup}
            requestVisible={requestVisible}
            requestInfo={requestInfo}
          />
        </article>
      )}
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    isLoading: state.waiver.isLoading,
    docsData: state.waiver.docs,
  }
}

export default connect(mapStateToProps)(CompleteDocument)

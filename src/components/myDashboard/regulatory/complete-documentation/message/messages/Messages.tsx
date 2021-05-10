/* eslint-disable @typescript-eslint/camelcase */
import React, { FC, useEffect, useRef } from 'react'
import { connect, useSelector } from 'react-redux'
import { RootState } from '../../../../../../redux/rootReducer'
import './messages.scss'

interface MessagesProps {
  isLoading?: boolean
  messages?: messagesDataType[]
}

type messagesDataType = {
  id: number
  created_by_user_name: string
  name: string
  created_date: string
  created_by_user_id: number
}

const Messages: FC<MessagesProps> = ({messages}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const userID = useSelector((state: RootState) => state.auth.sessionToken?.user_id)

  const scrollToBottom = () => {
    if (null !== messagesEndRef.current) {
      messagesEndRef?.current.scrollIntoView({ block: 'end' })
    }
  }


  useEffect(scrollToBottom, [messages])

  return (
    <section className="messages__container" ref={messagesEndRef}>
      {messages?.reverse()?.map((message) => {
        return (
          <div className={`messages__container__messages ${message.created_by_user_id === Number(userID) ? 'me' : ''}`} key={message.id}>
            <div className="messages__container__messages--name">
              <span>{message.created_by_user_name}</span>
            </div>
            <div className="messages__container__messages--date">
              <span>{message.created_date}</span>
            </div>
            <div className="messages__container__messages--message">
              <span>{message.name}</span>
            </div>
          </div>
        )
      })}
    </section>
  )
}

const mapStateToProps = (state: any) => {
  return {
    messages: state.messages.messages,
  }
}

export default connect(mapStateToProps)(Messages)

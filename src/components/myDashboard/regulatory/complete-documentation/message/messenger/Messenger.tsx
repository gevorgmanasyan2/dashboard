/* eslint-disable @typescript-eslint/camelcase */
import { SendOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { sendMessage, fetchMessages } from '../../../../../../redux/messages/actions'
import Title from '../../../../../title/Title'
import ActionButtons from './../../../../../action-buttons/ActionButtons'
import ShareableTextarea from './../../../../../shareable/shareable-textarea/ShareableTextarea'

import './messenger.scss'

const Messenger = () => {
 
  const [chatMessage, setChatMessage] = useState('')
  const { id }: any = useParams()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchMessages(id))
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

  return (
    <div className="messenger__container">
      <Title titleText="Messenger" />
      <form onSubmit={submitChatMessage} className="messenger__container__form">
        <ShareableTextarea
          value={chatMessage}
          label="Message"
          onKeyDown={onChatKeyDown}
          onChange={({ target: { value } }) => setChatMessage(value)}
          autoSize={{ maxRows: 3 }}
        />
        <div className="messenger__container__form__buttons">
          <ActionButtons
            buttonText="Cancel"
            className="config__container__buttons--cancel"
          />
          <ActionButtons
            buttonText="Send Message"
            className="config__container__buttons--next"
            icon={<SendOutlined />}
            onClick={submitChatMessage}
          />
        </div>
      </form>
    </div>
  )
}

export default Messenger

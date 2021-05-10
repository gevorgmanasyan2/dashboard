import React from 'react'
import Messages from './messages/Messages'
import Messenger from './messenger/Messenger'
import './message.scss'

const Message = () => {
  return (
    <article className='message__container'>
      <Messenger />
      <Messages />
    </article>
  )
}

export default Message

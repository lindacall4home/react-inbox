import React from 'react'
import Message from './message';

const MessageList = ({messages, toggleStar}) =>  (
  <div className="container">
    {messages.map(message => <Message key={message.id} message={message} toggleStar={toggleStar}/>)}
  </div>
)

export default MessageList

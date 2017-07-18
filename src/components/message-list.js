import React from 'react'
import Message from './message';

const MessageList = ({messages, toggleStar, toggleSelected}) =>  (
  <div className="container">
    {messages.map(message => <Message key={message.id} message={message} toggleStar={toggleStar} toggleSelected={toggleSelected}/>)}
  </div>
)

export default MessageList

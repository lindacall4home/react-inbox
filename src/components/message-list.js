import React from 'react'
import Message from './message';

const MessageList = ({appState}) =>  (
  <div className="container">
    {appState.messages.map(message => <Message key={message.id} appState={appState} message={message}/>)}
  </div>
)

export default MessageList

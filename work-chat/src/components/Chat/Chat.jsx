import React from 'react';
import MessageList from '../MessageList/MessageList';
import MessageInput from '../MessageInput/MessageInput';

export default function Chat() {
  return (
    <div>
      <MessageList />
      <MessageInput />
    </div>
  )
};
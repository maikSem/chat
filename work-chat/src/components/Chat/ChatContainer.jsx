import React, {useEffect, useState} from 'react';
import {Context} from '../../context';
import Chat from './Chat';

export default function ChatContainer({setItem, ...props}) {

  const [messages, setMessages] = useState([]);

  const [messageBody, setMessageBody] = useState('');

  useEffect(() => {
    let data = localStorage.getItem(setItem) || [];
    setMessages(JSON.parse(data) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem(setItem, JSON.stringify(messages))
  }, [messages]);

  const addMessage = event => {
    if (event.key === 'Enter') {
      setMessages([
        ...messages,
        {
          id: Date.now(),
          name: props.userName,
          message: messageBody
        }
      ]);
      setMessageBody('')
    }
  };

  const removeMessage = id => {
    setMessages(messages.filter(message => {
      return message.id !== id
    }))
  };

  return (
    <Context.Provider value={{addMessage, removeMessage, setMessageBody, messages, messageBody}}>
      <Chat />
    </Context.Provider>
  );
};
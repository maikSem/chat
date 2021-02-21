import React, {useContext} from 'react';
import Message from '../Message/Message';
import {Context} from "../../context";

export default function MessageList() {

  const {messages} = useContext(Context)

  return (
    <ul>
      {messages &&
      messages.map(item => <Message key={item.id}
                                    name={item.name}
                                    message={item.message}
                                    id={item.id}
      />)}
    </ul>
  )
};
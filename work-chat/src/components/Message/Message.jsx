import React, {useContext} from 'react';
import {Context} from "../../context";

export default function Message({name, message, id}) {

  const {removeMessage} = useContext(Context);

  return (
    <li>
      <div>
        <span>{name}</span>
        <span>{message}</span>
      </div>
      <button onClick={() => removeMessage(id)}>delete</button>
    </li>
  )
};
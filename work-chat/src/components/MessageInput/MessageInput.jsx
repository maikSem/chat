import React, {useContext} from 'react';
import {Context} from "../../context";

export default function MessageInput() {

  const {addMessage, setMessageBody, messageBody} = useContext(Context);

  return (
    <div className='input-field'>
      <div>
        <input type="text"
               value={messageBody}
               onChange={event => setMessageBody(event.target.value)}
               onKeyPress={addMessage}
        />
        <label>Message</label>
      </div>
    </div>
  )
};
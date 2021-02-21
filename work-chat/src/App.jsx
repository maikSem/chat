import React from 'react';
import './App.css';
import ChatContainer from "./components/Chat/ChatContainer";

function App() {

  let userName = 'Mike';

  return (
      <div className="App">
        <ChatContainer title='work chat' userName={userName} setItem='message-work'/>
        <ChatContainer title='flood chat' userName={userName} setItem='message-flood'/>
      </div>
  );
}

export default App;

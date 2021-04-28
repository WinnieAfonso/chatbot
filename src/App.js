import React from "react";
import Chatbot from 'react-chatbot-kit';

import config from './chat/config';
import MessageParser from './chat/MessageParser';
import ActionProvider from './chat/ActionProvider';

import './App.css';

function App() {
  return (
    <div className="App">

      <div style={{maxWidth: "300px" }}>
      <Chatbot config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      </div>
    </div>
  );
}

export default App;

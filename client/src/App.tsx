import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import socketIOClient from 'socket.io-client';

const WS ="http://localhost:3001/"

function App() {

  useEffect(() => {
    socketIOClient(WS)
  }, [])
  
  return (
    <div className="App">
      <button>Start new meeting</button>
    </div>
  );
}

export default App;

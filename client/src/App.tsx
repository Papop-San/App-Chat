import React, { Component } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Chatroom from './chat/Chatroom';

class App extends Component {
  state = { 
    name: "John Doe"
  };

  render() {
    return (
      <div>
  
        <Link to="/chat"><button>Show Chat</button></Link>

        <Routes>
        <Route path="/chat" element={<Chatroom />} />         
        </Routes>
      </div>
    );
  }
}

export default App;

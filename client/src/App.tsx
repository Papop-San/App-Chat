import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Chatroom from './chat/Chatroom';
import Chatform from './chat/Chatform';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

// ตัวช่วยดึงชื่อจาก location state (hook ใช้ในฟังก์ชันเท่านั้น)
const  Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          AppChat
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

class App extends Component {
  state = { 
    name: "John Doe"
  };

  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <Routes>
          <Route path="/chat" element={<Chatform />} />         
          <Route path="/chatroom" element={<Chatroom />} />         
        </Routes>
      </Box>
    );
  }
}

export default App;

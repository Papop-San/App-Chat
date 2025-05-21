import React, { ChangeEvent, Component } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Box } from '@mui/material';

interface State {
  name: string;
}

export default class Chatform extends Component<{}, State> {
  state: State = {
    name: ''
  };

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: e.target.value });
  };

  render() {
    const { name } = this.state;
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          width: 300,
          margin: 'auto',
          marginTop: 5,
        }}
      >
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={this.onChange}
        />
        <Button
          component={Link}
          to="/chatroom"
          state={{ name }}
          variant="contained"
          disabled={!name.trim()} // ปิดปุ่มถ้ายังไม่กรอกชื่อ
          fullWidth
        >
          Join
        </Button>
      </Box>
    );
  }
}

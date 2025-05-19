import React, { Component } from 'react';
import { io, Socket } from "socket.io-client";

interface ChatroomState {
  socket: Socket | null;
}

export default class Chatroom extends Component<{}, ChatroomState> {

  state: ChatroomState = {
    socket: null,
  };

  componentDidMount() {
    const socket: Socket = io("http://localhost:8080");
    this.setState({socket:socket});  

    socket.emit("emit", {message: "test"})
 
  }

  render() {
    return (
      <div>Chatroom</div>
    );
  }
}

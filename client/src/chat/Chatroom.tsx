import React, { Component } from 'react';
import { io, Socket } from "socket.io-client";

interface ChatroomState {
  socket: Socket | null;
  count: number;
}

export default class Chatroom extends Component<{}, ChatroomState> {

  state: ChatroomState = {
    socket: null,
    count: 0
  };

  componentDidMount() {
    const socket: Socket = io("http://localhost:8080");
    this.setState({ socket });
    // Listen for the "count" event from the server
    socket.on("count", (data) => {
      this.setState({ count: data.count });
    });
  }

  onClick = () => {
    // Emit an event to the server when the button is clicked
    const { socket } = this.state;
    if (socket) {
      socket.emit("emit", {});  
    } else {
      console.error("Socket not connected yet.");
    }
  }

  render() {
    return (
      <div>
        <h1>Chat Room</h1>
        <button onClick={this.onClick}>Count</button>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

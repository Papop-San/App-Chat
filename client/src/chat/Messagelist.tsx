import React, { Component } from 'react';
import Message from "./Message"

interface IMessage {
  text: string;
  member: string;
}

interface Props {
  messages: IMessage[];
  currentUser: string;  
}

export default class Messagelist extends Component<Props> {
  render() {
    const { messages, currentUser } = this.props;

    return (
      <ul className='Messages-list' style={{ paddingTop: "10px" }}>
        {messages.map((message, index) => (
          <Message key={index} message={message} currentUser={currentUser} />
        ))}
      </ul>
    );
  }
}

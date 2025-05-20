import React, { Component } from 'react';
import Message from "./Message"

interface IMessage {
  text: string;
  member: string;
}

interface Props {
  messages: IMessage[];
}

export default class Messagelist extends Component<Props> {
  render() {
    const { messages } = this.props;

    return (
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            <Message message={message} />
          </li>
        ))}
      </ul>
    );
  }
}

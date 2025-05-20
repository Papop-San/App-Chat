// Message.tsx
import React, { Component } from 'react';

interface IMessage {
  text: string;
  member: string;
}

interface Props {
  message: IMessage;
}

export default class Message extends Component<Props> {
  render() {
    const { message } = this.props;
    return (
      <div>
        <strong>{message.member}</strong>: {message.text}
      </div>
    );
  }
}

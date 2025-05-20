import React, { Component, FormEvent, ChangeEvent } from 'react';

interface Props {
    onMessagesend: (message: { text: string; member: string }) => void;
    currentMember: string; 
}
  
interface State {
  text: string;
}

export default class MessageForm extends Component<Props> {
  state: State = {
    text: "",
  };

  onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { text } = this.state;
    if (text.trim()) {
      this.props.onMessagesend({
        text: this.state.text,
        member: this.props.currentMember, 
      });
      this.setState({ text: "" });
    }
  };


  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text"
            value={this.state.text}
            onChange={this.onChange}
            placeholder="Type a message"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

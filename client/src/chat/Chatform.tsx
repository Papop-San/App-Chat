import React, { ChangeEvent, Component } from 'react';
import { Link } from "react-router-dom";

interface State {
  name: string;
}

export default class Chatform extends Component<{}, State> {
  state: State = {
    name: ""
  };

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: e.target.value });
  };
 
  render() {
    const {name}  = this.state;
    return (
      <div>
        <input type="text" value={this.state.name} onChange={this.onChange} />
        <Link to="/chatroom" state={{ name: name }}>
          Join
        </Link>
      </div>
    );
  }
}

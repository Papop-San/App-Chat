import React, { Component, ReactNode } from 'react';
import axios from 'axios';

interface RequestProps {
  url: string;
  children: (data: any[]) => ReactNode; // render prop
}

interface RequestState {
  data: any[];
}

export default class Request extends Component<RequestProps, RequestState> {
  state: RequestState = {
    data: [],
  };

  async componentDidMount() {
    try {
      const result = await axios.get(this.props.url);
      this.setState({ data: result.data });
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }

  render() {
    return this.props.children(this.state.data);
  }
}

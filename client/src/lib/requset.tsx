import { Component, ReactNode } from 'react';
import axios from 'axios';

interface RequestProps {
  url: string;
  children: (data: any[]) => ReactNode; 
}

interface RequestState {
  data: any[];
}

export default class Request extends Component<RequestProps, RequestState> {
  _isMounted = false;

  state: RequestState = {
    data: [],
  };

  async fetchData(url: string) {
    try {
      const result = await axios.get(url);
      if (this._isMounted) {
        this.setState({ data: result.data });
      }
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this.fetchData(this.props.url);
  }

  componentDidUpdate(prevProps: RequestProps) {
    if (prevProps.url !== this.props.url) {
      this.fetchData(this.props.url);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return this.props.children(this.state.data);
  }
}

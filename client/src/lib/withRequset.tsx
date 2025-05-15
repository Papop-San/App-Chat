import React, { Component } from "react";
import axios from "axios";

// Higher Order Component
const withData = (url: string) => (WrappedComponent: React.ComponentType<any>) => {
  return class WithData extends Component {
    state = {
      data: [],
    };

    async componentDidMount() {
      try {
        const result = await axios.get(url);
        this.setState({ data: result.data });
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }

    render() {  
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
};

export default withData;

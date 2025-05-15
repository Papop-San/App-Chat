import React, { Component } from "react";
import axios from "axios";
import { data } from "react-router-dom";

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
        console.log("Data fetched successfully", result.data);
      } catch (error) {
        console.error(data);
      }
    }

    render() {  
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
};

export default withData;

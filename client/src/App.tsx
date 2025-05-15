import React, { Component } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import User from './users/User';
import Post from './post/Post';

class App extends Component {
  state = {
    name: "John Doe"
  };

  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>

        {/* Use Link to navigate */}
        <Link to="/user"><a>User</a></Link><br />
        <Link to="/post"><a>Post</a></Link>

        <Routes>
          <Route path="/user" element={<User />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { UserWithData } from './users/User';
import { PostWithData } from './post/Post';

class App extends Component {
  state = {
    name: "John Doe"
  };

  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>

        {/* Use Link to navigate */}
        <Link to="/user"><button>Show User</button></Link>
        <Link to="/post"><button>Show Post</button></Link>

        <Routes>
        <Route path="/user" element={<UserWithData />} />
        <Route path="/post" element={<PostWithData />} />
        </Routes>
      </div>
    );
  }
}

export default App;

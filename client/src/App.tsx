import React, { Component } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Request from './lib/requset'; // Request component ที่ใช้ render prop
import User from './users/User'; // User component รับ data ผ่าน props
import  Post  from './post/Post';

class App extends Component {
  state = {
    name: "John Doe"
  };

  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <Link to="/user"><button>Show User</button></Link>
        <Link to="/post"><button>Show Post</button></Link>

        <Routes>
          <Route path="/user" element={
            <Request url="https://jsonplaceholder.typicode.com/users">
              {(data) => <User data={data} />}
            </Request>
          } />
          <Route path="/post" element={
            <Request url="https://jsonplaceholder.typicode.com/posts">
              {(data) => < Post data={data} />}
            </Request>
          } />
        </Routes>
      </div>
    );
  }
}

export default App;

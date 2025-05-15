import axios from 'axios';
import React, { Component } from 'react';

interface UserData {
  id: number;
  name: string;
  email: string;
}

interface UserState {
  data: UserData[];
}

export default class User extends Component<{}, UserState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    try {
      const result = await axios.get<UserData[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      this.setState({ data: result.data });
    } catch (error) {
      console.error("Error fetching users", error);
    }
  }

  render() {
    return (
      <div>
        <h1>User List</h1>
        <table style={{ border: "1px solid black", textAlign: "center", width: "100%" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((user: UserData) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

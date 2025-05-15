import axios from 'axios';
import React, { Component } from 'react';


interface UserData {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface UserState {
  data: UserData[];
}

export default class User extends Component<{}, UserState> {
  constructor(props: UserData) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    try {
      const result = await axios.get<UserData[]>("https://jsonplaceholder.typicode.com/posts");
      this.setState({ data: result.data });
    } catch (error) {
      console.error("Error fetching users", error);
    }
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((user: UserData) => (
              <tr key={user.id}>
                <td>{user.userId}</td>
                <td>{user.title}</td>
                <td>{user.body}</td>
              </tr>
            ))}
          </tbody>
        </table>    
      </div>
    );
  }
  
}

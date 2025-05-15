import React, { Component } from 'react';
import withData from '../lib/withRequset';

interface UserData {
  id: number;
  name: string;
  email: string;
}

interface UserProps {
  data: UserData[]; // Data comes as prop from withData HOC
}

export default class User extends Component<UserProps> {
  render() {
    const { data } = this.props;

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
            {data.map((user: UserData) => (
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

export const UserWithData = withData("https://jsonplaceholder.typicode.com/users")(User);
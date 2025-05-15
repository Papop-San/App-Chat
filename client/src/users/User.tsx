import React from 'react';

interface UserData {
  id: number;
  name: string;
  email: string;
}

interface UserProps {
  data: UserData[];
}

const User: React.FC<UserProps> = ({ data }) => {
  if (!data.length) return <p>No users found.</p>;

  return (
    <div>
      <h1>User List</h1>
      <table style={{ border: "1px solid black", textAlign: "center", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
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
};

export default User;

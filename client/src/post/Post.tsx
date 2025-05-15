import React, { Component } from 'react';
import withData from '../lib/withRequset';


interface PostData {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface PostProps {
  data: PostData[];
}

export default class Post extends Component<PostProps> {


  render() {
    const { data } = this.props;
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
            {data.map((user: PostData) => (
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
export const PostWithData = withData("https://jsonplaceholder.typicode.com/posts")(Post);

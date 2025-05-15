import React from 'react';


 
interface PostData {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface PostProps {
  data: PostData[];
}

const Post: React.FC<PostProps> = ({ data }) => {
  if (!data.length) return <p>No posts found.</p>;
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
  

export default Post;
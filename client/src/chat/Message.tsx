import React from 'react';

interface IMessage {
  text: string;
  member: string;
}

interface Props {
  message: IMessage;
  currentUser: string;
}

const Message: React.FC<Props> = ({ message, currentUser }) => {
  const isCurrentUser = message.member === currentUser;

  const messageStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: isCurrentUser ? 'flex-end' : 'flex-start',
    paddingTop: '10px',
  };

  const contentStyle: React.CSSProperties = {
    maxWidth: '60%',
    padding: '10px',
    borderRadius: '10px',
    backgroundColor: isCurrentUser ? '#dcf8c6' : '#fff',
    color: '#000',
    textAlign: isCurrentUser ? 'right' : 'left',
    boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
  };

  return (
    <li style={messageStyle}>
      <div style={contentStyle}>
        <div className='username' style={{ fontWeight: 'bold', textAlign: "start" }}>
          {message.member}
        </div>
        <div className='text'>{message.text}</div>
      </div>
    </li>
  );
};

export default Message;

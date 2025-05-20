import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Messagelist from './Messagelist';
import MessageForm from './MessageForm';

interface Message {
  text: string;
  member: string;
}

interface LocationState {
  state?: {
    name?: string;
  };
}

export default function Chatroom() {
  const location = useLocation() as LocationState;
  const navigate = useNavigate();

  const userName = location.state?.name;

  // Redirect to /chat if no name provided
  useEffect(() => {
    if (!userName) {
      navigate('/chat');
    }
  }, [userName, navigate]);

  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hi', member: 'John Doe' },
    { text: 'Hello', member: 'Jane Doe' },
    { text: 'Good', member: 'Deaw Doe' },
    { text: 'Great', member: 'Fon Doe' },
  ]);

  
  const handleSend = (message: Message) => {
    setMessages([...messages, message]);
  };

  return (
    <div>
      <Messagelist messages={messages} />
      <MessageForm onMessagesend={handleSend} currentMember={userName || 'Guest'} />
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { io, Socket } from 'socket.io-client';
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

  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hi', member: 'John Doe' },
    { text: 'Hello', member: 'Jane Doe' },
    { text: 'Good', member: 'Deaw Doe' },
    { text: 'Great', member: 'Fon Doe' },
  ]);

  const [socket, setSocket] = useState<Socket | null>(null);

  // Redirect ถ้าไม่มีชื่อ
  useEffect(() => {
    if (!userName) {
      navigate('/chat');
    }
  }, [userName, navigate]);

  // สร้าง socket connection
  useEffect(() => {
    const newSocket = io("http://localhost:8080");
    setSocket(newSocket);

    // ส่งชื่อผู้ใช้ไปให้ backend
    newSocket.emit("join", userName);

    // รับข้อความจาก server
    newSocket.on("message", (message: Message) => {
      setMessages(prev => [...prev, message]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, [userName]); // ใส่ userName เป็น dependency เพื่อให้ emit join ครั้งเดียว

  // ส่งข้อความไป server
  const handleSend = (message: Message) => {
    if (socket) {
      socket.emit("message", { ...message, member: userName });
    }
  };

  return (
    <div>
      <Messagelist messages={messages} currentUser={userName || 'Guest'} />
      <MessageForm onMessagesend={handleSend} currentMember={userName || 'Guest'} />
    </div>
  );
}

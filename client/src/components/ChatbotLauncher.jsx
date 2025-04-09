import React, { useState } from 'react';
import { FiMessageSquare } from 'react-icons/fi';
import ChatBot from './ChatBot';
import './ChatbotLauncher.css';

const ChatbotLauncher = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <ChatBot onClose={() => setOpen(false)} />}
      <div className="chatbot-launcher" onClick={() => setOpen(!open)}>
        <FiMessageSquare size={24} />
      </div>
    </>
  );
};

export default ChatbotLauncher;

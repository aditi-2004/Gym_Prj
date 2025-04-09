// // ChatBot.jsx
// import React, { useState } from 'react';
// import './ChatBot.css';

// const ChatBot = () => {
//   const [showBot, setShowBot] = useState(false);
//   const [messages, setMessages] = useState([{ from: 'bot', text: "Hi! I'm your FitLife Assistant 🤖. Ask me anything about fitness, yoga, or diet." }]);
//   const [userInput, setUserInput] = useState('');

//   const toggleBot = () => setShowBot(!showBot);

//   const handleSend = async () => {
//     if (!userInput.trim()) return;

//     const newMessages = [...messages, { from: 'user', text: userInput }];
//     setMessages(newMessages);

//     try {
//       const res = await fetch('http://localhost:5000/api/chatbot-data', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message: userInput })
//       });

//       const data = await res.json();
//       setMessages(prev => [...prev, { from: 'bot', text: data.reply }]);
//     } catch (error) {
//       setMessages(prev => [...prev, { from: 'bot', text: "Sorry, I couldn't connect to the server." }]);
//     }

//     setUserInput('');
//   };

//   return (
//     <div>
//       <button onClick={toggleBot} className="chat-button">💬 Chat with FitBot</button>
      
//       {showBot && (
//         <div className="chat-popup">
//           <div className="chat-header">🧘 FitLife Assistant</div>
//           <div className="chat-messages">
//             {messages.map((msg, idx) => (
//               <div key={idx} className={msg.from === 'user' ? 'user-msg' : 'bot-msg'}>
//                 {msg.text}
//               </div>
//             ))}
//           </div>
//           <div className="chat-input">
//             <input 
//               type="text" 
//               value={userInput}
//               placeholder="Ask me about yoga, diet, or fitness..."
//               onChange={(e) => setUserInput(e.target.value)}
//               onKeyDown={(e) => e.key === 'Enter' && handleSend()}
//             />
//             <button onClick={handleSend}>Send</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatBot;



// src/components/ChatBot.jsx
import React, { useEffect, useRef, useState } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const hour = new Date().getHours();
    let greeting = 'Hello';
    if (hour < 12) greeting = 'Good Morning 🌅';
    else if (hour < 17) greeting = 'Good Afternoon ☀️';
    else greeting = 'Good Evening 🌇';

    setMessages(prev => [
      ...prev,
      { from: 'bot', text: `${greeting}! I’m your FitLife Assistant. How can I help you today?` }
    ]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const suggestions = [
    'Workout Plans',
    'Yoga Routines',
    'Diet Plans',
    'Other Problems'
  ];

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setShowSuggestions(false);

    try {
      const res = await fetch('http://localhost:5000/api/chatbot-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });
      const data = await res.json();

      if (data?.reply) {
        setMessages(prev => [...prev, { from: 'bot', text: data.reply }]);
      } else {
        setMessages(prev => [
          ...prev,
          { from: 'bot', text: `Sorry, I didn't get that. Try asking about yoga, diet, or workouts.` },
          { from: 'bot', text: 'Need more help? ', button: true }
        ]);
      }
    } catch (err) {
      setMessages(prev => [...prev, { from: 'bot', text: 'Error connecting to server.' }]);
    }
  };

  const handleSuggestionClick = (text) => {
    setInput(text);
    handleSend();
  };

  return (
    <div className="chatbot-container">
      <div className="chat-header">🧘 FitLife Assistant</div>
      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`chat-msg ${msg.from}`}>
            {msg.text}
            {msg.button && (
              <a
                className="contact-button"
                href="mailto:support@fitlife.com?subject=Help&body=Please describe your issue and attach screenshots."
              >📩 Contact Us</a>
            )}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {showSuggestions && (
        <div className="suggestions">
          {suggestions.map((s, idx) => (
            <button key={idx} onClick={() => handleSuggestionClick(s)}>{s}</button>
          ))}
        </div>
      )}

      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
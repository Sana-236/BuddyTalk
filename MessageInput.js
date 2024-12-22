import React, { useState } from 'react';
import './MessageInput.css';

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleClick}>Send</button>
    </div>
  );
};

export default MessageInput;

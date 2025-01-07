import React from 'react';
import MessageInput from './MessageInput';
import './ChatWindow.css';

const ChatWindow = ({ messages, friend, draft, ondraft, onSendMessage, onBack }) => {
  return (
    <div className="chatwindow">
      <div className="header">
        <button onClick={onBack} className="back-button">
          &larr;
        </button>
        <div className="frienddp">
          <span>{friend.name[0]}</span>
        </div>
        <span className="friendname">{friend.name}</span>
      </div>
      <div className="talkspace">
        {messages && messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.sender === 'you' ? 'message-you' : 'message-friend'
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <MessageInput 
        onSend={onSendMessage}
        draft={draft}
        ondraft={(draftmessage)=>ondraft(friend.id,draftmessage)}/>
    </div>
  );
};

export default ChatWindow;

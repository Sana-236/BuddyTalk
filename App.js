import React, { useState } from 'react';
import './styles.css';
import FriendList from './FriendList';
import ChatWindow from './ChatWindow';

const App = () => {
  const [messages, setMessages] = useState({});
  const [currentFrnd, setCurrentFrnd] = useState(null);

  const friends = [
    { id: 1, name: 'Sana' },
    { id: 2, name: 'Halsu' },
    { id: 3, name: 'Alia' },
  ];

  const handleSendMessage = (message) => {
    if (message.trim()) {
      setMessages((prevMessages) => ({
        ...prevMessages,
        [currentFrnd.id]: [
          ...(prevMessages[currentFrnd.id] || []),
          { sender: 'you', text: message },
        ],
      }));
    }
  };

  const handleSelectFriend = (friend) => {
    setCurrentFrnd(friend);
  };

  const handleBackToFriends = () => {
    setCurrentFrnd(null);
  };

  return (
    <div className="Buddyapp">
      <h1 className="app-title">BuddyTalk</h1>
      {!currentFrnd ? (
        <FriendList friends={friends} onSelectFriend={handleSelectFriend} />
      ) : (
        <ChatWindow
          messages={messages[currentFrnd.id] || []}
          friend={currentFrnd}
          onSendMessage={handleSendMessage}
          onBack={handleBackToFriends}
        />
      )}
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import './App.css';
import FriendList from './FriendList';
import ChatWindow from './ChatWindow';

const App = () => {
  const [messages, setMessages] = useState({});
  const [currentFrnd, setCurrentFrnd] = useState(null);
  const [draft,setDraft]=useState({});

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
          { sender: 'you', text: message,
          timestamp:new Date().toLocaleTimeString()},
        ],
      }));
        setDraft((prev)=>({
            ...prev,[currentFrnd.id]:' ',
        }));
    }
  };

  const handleSelectFriend = (friend) => {
    setCurrentFrnd(friend);
  };

  const handleBackToFriends = () => {
    setCurrentFrnd(null);
  };
    const handledraft=()=>{
        setDraft((prev)=>({
            ...prev,[friends.id]:drafts,
        }));
    };

  return (
    <div className="Buddyapp">
      <h1 className="app-title">BuddyTalk</h1>
      {!currentFrnd ? (
        <FriendList friends={friends}message={messages} onSelectFriend={handleSelectFriend} />
      ) : (
        <ChatWindow
          messages={messages[currentFrnd.id] || []}
          friend={currentFrnd}
        draft={draft[currentFrnd.id]||' '}
          onSendMessage={handleSendMessage}
          onBack={handleBackToFriends}
            ondraft={handledraft}
        />
      )}
    </div>
  );
};

export default App;

import React from 'react';
import './FriendList.css';

const FriendList = ({ friends, onSelectFriend }) => {
  return (
    <div className="friendlist">
      <ul className="friendlist-items">
        {friends && friends.map((friend) => (
          <li
            key={friend.id}
            className="individual"
            onClick={() => onSelectFriend(friend)}
          >
            <div className="friend-dp">
              <span>{friend.name[0]}</span>
            </div>
            <span>{friend.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;

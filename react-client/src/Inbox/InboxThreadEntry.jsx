import React from 'react';
import { Link } from 'react-router-dom';

const InboxThreadEntry = (props) => {
  const { message, user, onMessageClick, toggle } = props;
  return (
    <button
      className="inbox-thread-entry"
      type="button"
      onClick={() => {
        toggle();
        onMessageClick(message);
      }}
    >
      <h6>
        {message.header} - Last Message on {new Date(message.lastUpdated).toString()}
      </h6>
      <div>
        Users: { message.users.filter(ele => ele !== user) }
      </div>
    </button>
  );
};

export default InboxThreadEntry;

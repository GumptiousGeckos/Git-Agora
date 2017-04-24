import React from 'react';
import { Link } from 'react-router-dom';

const InboxThreadEntry = (props) => {
  const { message, user, onMessageClick, toggle } = props;
  return (
    <button
      className="inbox-thread-entry list-group-item"
      type="button"
      onClick={() => {
        toggle();
        onMessageClick(message);
      }}
    >
      <h4>
        {message.header} - Last Message on {new Date(message.lastUpdated).toString()}
      </h4>
      <h4>
        Users: { message.users.filter(ele => ele !== user) }
      </h4>
    </button>
  );
};

export default InboxThreadEntry;

import React from 'react';
import { Link } from 'react-router-dom';

const InboxThreadEntry = (props) => {
  const { message, user, onMessageClick } = props;
  return (
    <Link to={'/inbox/' + message._id} key={message._id} >
      <button
        className="inbox-thread-entry list-group-item"
        type="button"
        onClick={() => onMessageClick(message)}
      >
        <h4>
          {message.header} - Last Message on {new Date(message.lastUpdated).toString()}
        </h4>
        <h4>
          Users: { message.users.filter(ele => ele !== user) }
        </h4>
      </button>
    </Link>
  );
};

export default InboxThreadEntry;

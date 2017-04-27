import React from 'react';
import { Link } from 'react-router-dom';
import TimeAgo from 'react-timeago';

const InboxThreadEntry = (props) => {
  const { message, user, onMessageClick, toggle } = props;
  return (
    <div
      className="inbox-thread-entry"
      role="button"
      onClick={() => {
        toggle();
        onMessageClick(message);
      }}
    >
      <div className="inbox-thread-entry-title row">
        {message.header} - Last updated {''}
        <TimeAgo date={new Date(message.lastUpdated).toString()} />
      </div>
      <div className="inbox-thread-entry-user">
        { message.users.filter(ele => ele !== user) }
      </div>
    </div>
  );
};

export default InboxThreadEntry;

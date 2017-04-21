import React from 'react';
import { Link } from 'react-router-dom';

const ThreadMessageEntry = (props) => {
  const { message } = props;
  return (
    <div className="inbox-message-entry">
      <div className="inbox-message-header">
        <Link to={'/user/'+ message.sender.id} >
          <span> {message.sender.username} </span>
        </Link>
        <span> Sent at {message.timeSent} </span>
      </div>
      <div className="inbox-message-body">
        {message.text}
      </div>
    </div>
  );
};

export default ThreadMessageEntry;

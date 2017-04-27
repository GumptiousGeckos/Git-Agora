import React from 'react';
import { Link } from 'react-router-dom';
import TimeAgo from 'react-timeago';

const ThreadMessageEntry = (props) => {
  const { message } = props;
  return (
    <div className="inbox-message-entry">
      <div className="row inbox-message-header">
        <div
          className="one-half column message-user"
        >
          <Link to={'/users/'+ message.sender.id} >
            {message.sender.username}
          </Link>
        </div>
        <div
          className="message-time"
        >
          Sent <TimeAgo date={message.timeSent} />
        </div>
      </div>
      <div className="inbox-message-body">
        {message.text}
      </div>
    </div>
  );
};

export default ThreadMessageEntry;

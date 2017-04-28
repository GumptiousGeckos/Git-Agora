import React from 'react';
import { Link } from 'react-router-dom';
import TimeAgo from 'react-timeago';


export default (props) => {
  const { comment, user } = props;
  return (
    <div className="comment">
      <div className="row">
        <div className="three columns comment-meta">
          <Link to={'/users/' + comment.user_id}>
            <img src={comment.avatar} className="comment-avatar" alt="Responsive image"/>
          </Link>
          <Link to={'/users/' + comment.user_id}>
            <span className="comment-username">{comment.username}</span>
          </Link>
          <div className="date-created">
            <TimeAgo date={comment.date_created} />
          </div>
        </div>
        <div className="nine columns content-section">
          <p className="comment-content">{comment.content}</p>
        </div>
      </div>
    </div>
  );
};

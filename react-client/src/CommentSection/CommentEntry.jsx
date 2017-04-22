import React from 'react';
import { Link } from 'react-router-dom';


export default (props) => {
  const { comment, user } = props;
  return (
    <div className="comment">
      <div className="row">
        <div className="col-md-1">
        </div>
        <div className="col-md-11">
          <div className="col-md-2">
            <Link to={'/users/' + comment.id}>
              <span id="username">{comment.username}</span>
            </Link>
          </div>
          <div className="col-md-10">
            <span className="date-created">{comment.date_created}</span>
          </div>
        </div>
      </div>
      <div className="row">
        <Link to={'/users/' + comment.id}>
          <div className="col-md-1">
            <img id="icon" src={comment.avatar} className="img-fluid" alt="Responsive image"/>
          </div>
        </Link>
        <div className="col-md-11" id="content-section">
          <p id="content">{comment.content}</p>
        </div>
      </div>
    </div>
  );
};
import React from 'react';

export default (props) => {
  const { comment } = props;


  return (
    <div className="comment">
      <div className="row">
        <div className="col-md-1">
<<<<<<< HEAD
        {`#:  ${comment.id}`}
=======
          {`#:  ${comment.id}`}
>>>>>>> 70408d582e791c519851095694a48329a6f673d0
        </div>
        <div className="col-md-11">
          <div className="col-md-2">
            <span id="username">{comment.username}</span>
          </div>
          <div className="col-md-10">
            <span className="date-created">{comment.date_created}</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-1">
<<<<<<< HEAD
          <img id="icon" src={comment.picture} className="img-fluid" alt="Responsive image"/>
=======
          <img id="icon" src={comment.avatar} className="img-fluid" alt="Responsive image"/>
>>>>>>> 70408d582e791c519851095694a48329a6f673d0
        </div>
        <div className="col-md-11" id="content-section">
          <p id="content">{comment.content}</p>
        </div>
      </div>
    </div>
  );
};
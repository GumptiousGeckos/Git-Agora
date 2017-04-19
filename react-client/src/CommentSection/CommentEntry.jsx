import React from 'react';

export default (props) => {
  let comment = {
    username: 'NoFussGus',
    time: '2 days ago',
    content: 'That\'s Amaazing dood',
    dev_points: 150,
    idea_points: 233
  }



  return (
    <div className="comment">
      <div className="row">
        <div className="col-md-1">
        Post #1
        </div>
        <div className="col-md-11">
          <span id="username">{props.comment.user_id}</span>
          <span className="timestamp">{props.comment.created_at}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-1">
          <div >Dev: 250</div>
          <div >Idea: 350</div>

        </div>
        <div className="col-md-11">
          <p>{props.comment.content}   </p>
        </div>
      </div>
    </div>
  );
};
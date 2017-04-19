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
    <div>
      <div className="row">
        <div className="col-md-2">
        Post #1
        </div>
        <div className="col-md-10">
          {props.comment.user_id}
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <div >Dev: 250</div>
          <div >Idea: 350</div>

        </div>
        <div className="col-md-10">
          <p>{props.comment.content}   </p>
        </div>
      </div>
    </div>
  );
};
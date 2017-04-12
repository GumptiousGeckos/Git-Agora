import React from 'react';
import Votes from './Votes.jsx';

export default (props) => (
  <div>
    <Votes
      likes={props.project.likes}
      dislikes={props.project.dislikes}
    />
    <div 
      onClick={props.onClick}
      className="well col-lg-11 col-md-11 col-sm-10 col-xs-10"
    >
      <span>{props.project.title}</span>
      <h4>{props.project.description}</h4>
    </div>
  </div>
);
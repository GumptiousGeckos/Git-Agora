import React from 'react';
import { Link } from 'react-router-dom';
import Votes from './Votes.jsx';

export default (props) => (
  <div>
    <Votes
      likes={props.project.likes}
      dislikes={props.project.dislikes}
    />
    <Link to={'/projects/' + props.project.id}>
      <div
        className="well col-lg-11 col-md-11 col-sm-10 col-xs-10"
        onClick={() => { props.updateMainProject(props.project); }}
      >
        <h4>{props.project.title}</h4>
        <h4 className="standard">{props.project.description}</h4>
      </div>
    </Link>
  </div>
);

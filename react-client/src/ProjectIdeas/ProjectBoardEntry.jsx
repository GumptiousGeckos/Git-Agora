import React from 'react';
import { Link } from 'react-router-dom';
import Votes from '../Votes/Votes.jsx';

export default (props) => {
  let { votes, title, url, source, description, vote_type, id, tags } = props.project;
  const tagArray = tags ? tags.split(',') : [];
  return (
  <div>
    <Votes votes={votes} topic_type={'project'} vote_type={vote_type} topic_id={id}/>
    <Link to={'/projects/' + id}>
      <div
        className="well col-lg-11 col-md-11 col-sm-10 col-xs-10"
      >
        <h4>{title}</h4>
        <h6>Tags:
          {
            tagArray && tagArray.map(tag =>
              <span>{' ' + tag}</span>
            )
          }
        </h6>
        <h4 className="standard">{description}</h4>
      </div>
    </Link>
  </div>
  );
};

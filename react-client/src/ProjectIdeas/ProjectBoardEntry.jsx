import React from 'react';
import { Link } from 'react-router-dom';
import Votes from '../Votes/Votes.jsx';

export default (props) => {
  let { votes, title, url, source, description, vote_type, id, tags } = props.project;
  const tagArray = tags ? tags.split(',') : [];
  return (
  <div className="row project-entry">
    <Votes votes={votes} topic_type={'project'} vote_type={vote_type} topic_id={id}/>
    <Link to={'/projects/' + id}>
      <div className="ten columns">
        <div className="project-entry-title">
          {title}
          {
            tagArray.length === 0 ? <span className="project-entry-tag">none</span> :
            tagArray.map((tag, index) =>
              <span className="project-entry-tag" key={index}>{tag}</span>
            )
          }
        </div>
        <div className="project-entry-description">
          {description}
        </div>
      </div>
    </Link>
  </div>
  );
};

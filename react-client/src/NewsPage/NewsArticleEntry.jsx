import React from 'react';
import Votes from '../Votes/Votes.jsx';

export default (props) => {
  let { votes, title, url, source, description, vote_type, id } = props.article;
  return (
    <div>
      <Votes votes={votes} topic_type={'article'} vote_type={vote_type} topic_id={id}/>
      <div className="well col-lg-11 col-md-11 col-sm-10 col-xs-10">
        <a href={url}>
          <h4>{title}</h4>
        </a>
        <span>{description}</span>
        <br />
        <span>- {source}</span>
      </div>
    </div>
  );
};
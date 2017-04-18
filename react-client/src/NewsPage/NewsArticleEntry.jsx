import React from 'react';
import Votes from './Votes.jsx';

export default (props) => {
  let { votes, title, url, source, description } = props.article;
  return (
    <div>
      <Votes votes={votes} />
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
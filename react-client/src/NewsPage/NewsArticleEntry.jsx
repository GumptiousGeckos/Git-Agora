import React from 'react';
import { Link } from 'react-router-dom';
import Votes from '../Votes/Votes.jsx';

export default (props) => {
  let { votes, title, url, source, description, vote_type, id } = props.article;
  return (
    <div className="row article-entry">
      <Votes votes={votes} topic_type={'article'} vote_type={vote_type} topic_id={id}/>
      <Link to={'/articles/' + id}>
      <div className="ten columns">
        <a href={url}>
          <div className="article-entry-title">{title}</div>
        </a>
        <div className="article-entry-description">{description}</div>
        <div className="article-entry-source">- {source}</div>
      </div>
      </Link>
    </div>
  );
};
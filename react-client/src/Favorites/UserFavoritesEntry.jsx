import React from 'react';
import { Link } from 'react-router-dom';


export default (props) => {
  const { favorite } = props;
  let toRender;

  if (favorite.type === 'user') {
    toRender = <Link to={'/users/' + favorite.userid}>{favorite.username}</Link>

  } else if (favorite.type === 'project') {
    toRender = <Link to={'/projects/' + favorite.projectid}>{favorite.projecttitle}</Link>

  } else if (favorite.type === 'article') {
    toRender = <Link to={'/articles/' + favorite.articleid}>{favorite.articletitle}</Link>
  }

  return (
    <li>
      {toRender}
    </li>
  );
};
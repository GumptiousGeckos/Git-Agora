import React from 'react';

export default (props) => {
  const { favorite } = props;
  let toRender;

  if (favorite.type === 'user') {
    toRender = <td>{favorite.username}</td>

  } else if (favorite.type === 'project') {
    toRender = <td>{favorite.projecttitle}</td>

  } else if (favorite.type === 'article') {
    toRender = <td>{favorite.articletitle}</td>
  }

  return (
    <div>
      {toRender}
    </div>
  );
};
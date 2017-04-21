import React from 'react';

import UserProjects from './UserProjects.jsx';
import UserDetails from './UserDetails.jsx';

export default (props) => {
  const { id } = props.match.params;
  return (
    <div className="container">
      <div className="col-md-4">
        <UserDetails id={id} />
      </div>
      <div className="col-md-8">
        <UserProjects id={id} />
      </div>
    </div>
  );
};

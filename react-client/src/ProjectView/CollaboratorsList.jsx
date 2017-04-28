import React from 'react';

export default (props) => {
  const { collaborators } = props;
  return (
    <div className="text-center bordered">
      <h1 className="underline">Collaborators</h1>
      {
        collaborators.map((person, index) =>
          <div key={index}>
            <h3>{person.username}</h3>
          </div>
        )
      }
    </div>
  );
};

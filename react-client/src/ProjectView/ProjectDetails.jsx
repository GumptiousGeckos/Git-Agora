import React from 'react';

export default (props) => {
  const { project } = props;
  const tagArray = project.tags ? project.tags.split(',') : [];
  return (
    <div>
      <div className="bordered text-center">
        <div>
          <h1>{project.title}</h1>
        </div>
        <div>
          <span>Tags: </span>
          {
            tagArray.length === 0 ? 'None' :
              tagArray.map((tag, index) =>
              <span key={index}>{tag + ' '}</span>
            )
          }
        </div>
      </div>
      <div className="text-left bordered">
        <h2>Description:</h2>
        <h3>{project.description}</h3>
        <h4>Github: <a href={'https://' + project.link}>{project.link}</a></h4>
      </div>
    </div>
  );
};

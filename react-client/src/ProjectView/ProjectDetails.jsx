import React from 'react';

export default (props) => {
  const { project, tags } = props;
  return (
    <div>
      <div className="bordered text-center">
        <div>
          <h1>{project.title}</h1>
        </div>
        <div>
          {
            tags.map((tag, index) =>
              <span key={index}>{tag.tag_name + ' '}</span>
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

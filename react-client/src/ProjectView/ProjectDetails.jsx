import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  const { project } = props;
  const tagArray = project.tags ? project.tags.split(',') : [];
  return (
    <div>
      <div className="bordered text-center seven columns">
        <div>
          <h4>{project.title}</h4>
          <span>Tags: </span>
          {
            tagArray.length === 0 ? 'None' :
              tagArray.map((tag, index) =>
              <span className="project-entry-tag" key={index}>{tag + ' '}</span>
            )
          }
        </div>

        <div className="text-center bordered project-details">
          <h5 className="project-details-description container">{project.description}</h5>
          <div className="container text-left">
            <h6>
              {'Creator: '}
              <Link to={'/users/' + project.user_id}>
                <img src={project.avatar} className="project-avatar" alt="Responsive image" />
                {project.username}
              </Link>
            </h6>
            <h6>Github repository: <a href={'https://' + project.link}>{project.link}</a></h6>
            <h6>Points: {project.points}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import AddFavorite from '../Favorites/AddFavorite.jsx';

export default (props) => {
  const { project } = props;
  const tagArray = project.tags ? project.tags.split(',') : [];
  return (
    <div className="project-view-details">
      <div className="bordered text-center seven columns">
        <div className="project-details-title">
          <font size="5">{project.title}</font><br />
          <span>Tags: </span>
          {
            tagArray.length === 0 ? 'None' :
              tagArray.map((tag, index) =>
              <span className="project-entry-tag" key={index}>{tag + ' '}</span>
            )
          }
        </div>

        <div className="text-center project-details">
          <div className="container text-left">
            <font size="2">
              {'Creator: '}
              <Link to={'/users/' + project.user_id}>
                {project.username}
              </Link>
            </font><br />
            <font size="2">Github repository: <a href={project.link}>{project.link}</a></font><br />
            <font size="2">Idea Points: {project.idea_points ? project.idea_points : '0'}</font><br />
            <font size="2">Dev Points: {project.dev_points ? project.dev_points : '0'}</font>
          </div>
          <div className="project-details-description container text-left">
            <font size="4">
              {project.description}
            </font>
          </div>
        </div>
        <div className="text-center">
          <AddFavorite
            type='project'
            favorite_id={parseInt(project.id)}
          />
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { connect } from 'react-redux';

import ProjectBoardEntry from './ProjectBoardEntry.jsx';
import { addProject, fetchProjects, updateMainProject } from './projectActions';

export class ProjectBoard extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToProjectCreation = this.redirectToProjectCreation.bind(this);
  }

  componentWillMount() {
    const { getProjects } = this.props;
    getProjects();
  }

  redirectToProjectCreation() {
    const { createProject } = this.props;
    createProject();
  }

  render() {
    const { projects, updateMainProject } = this.props;

    return (
      <div>
        <div className="col-md-12">
          <ul className="nav nav-tabs">
            <li className="active">
              <a>Top</a>
            </li>
            <li>
              <a>Trending</a>
            </li>
            <li>
              <a>New</a>
            </li>
          </ul>
          {
            projects && projects.map(project =>
              <ProjectBoardEntry
                key={project.id}
                project={project}
                updateMainProject={updateMainProject}
              />
            )
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects.projects
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProjects: () => dispatch(fetchProjects()),
    createProject: () => dispatch(addProject()),
    updateMainProject: project => dispatch(updateMainProject(project))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectBoard);

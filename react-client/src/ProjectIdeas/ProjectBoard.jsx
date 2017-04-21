import React from 'react';
import { connect } from 'react-redux';

import ProjectBoardEntry from './ProjectBoardEntry.jsx';
import { addProject, fetchProjects } from './projectActions';

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
    const { projects } = this.props;

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
            projects.map(project =>
              <ProjectBoardEntry
                key={project.id}
                project={project}
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
    createProject: () => dispatch(addProject())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectBoard);

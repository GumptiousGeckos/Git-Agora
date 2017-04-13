import React from 'react';
import { connect } from 'react-redux';

import ProjectBoardEntry from './ProjectBoardEntry.jsx';
import { addProject, fetchProjects } from './projectActions';

export class ProjectBoard extends React.Component {

  redirectToProjectView() {
    console.log('redirect to PV');
  }

  redirectToProjectCreation() {
    // Create Project button hardcoded to create dummy data
    this.props.dispatch(addProject());
  }

  componentWillMount() {
    const { getProjects } = this.props;
    getProjects();
  }

  render() {
    const { projects } = this.props;

    return (
      <div>
        <div className="col-md-10">
          <ul className="nav nav-tabs">
            <li className="active">
              <a href="#">Top</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">New</a>
            </li>
          </ul>
          {
            projects && projects.map((project) =>
              <ProjectBoardEntry
                key={project.id}
                onClick={this.redirectToProjectView.bind(this)}
                project={project}
              />
            )
          }
        </div>
        <div className="col-md-2 text-center bordered">
          <h2>Have an idea?</h2>
          <button
            onClick={this.redirectToProjectCreation.bind(this)}
            className="btn btn-primary btn-lg"
          >Create Project</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects.projects
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProjects: () => dispatch(fetchProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectBoard);
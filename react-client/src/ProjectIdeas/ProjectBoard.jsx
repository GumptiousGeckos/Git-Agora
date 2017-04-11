import React from 'react';
import { connect } from 'react-redux';

import ProjectBoardEntry from './ProjectBoardEntry.jsx';
import { addProject } from './projectActions';

export class ProjectBoard extends React.Component {

  redirectToProjectView() {
    console.log('redirect to PV');
  }

  redirectToProjectCreation() {
    // Create Project button hardcoded to create dummy data
    this.props.dispatch(addProject());
  }

  render() {
    const { projects } = this.props;

    return (
      <div>
        <h2>Projects</h2>
        <button onClick={this.redirectToProjectCreation.bind(this)}>Create Project</button>
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
    );
  }
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  };
};

export default connect(mapStateToProps)(ProjectBoard);
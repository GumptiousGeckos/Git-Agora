import React from 'react';
import { connect } from 'react-redux';

import ProjectBoardEntry from './ProjectBoardEntry.jsx';
import { fetchProjects } from './projectActions';

export class ProjectBoard extends React.Component {

  componentWillMount() {
    const { getProjects } = this.props;
    getProjects();
  }

  render() {
    const { projects } = this.props;

    return (
        <div className="container">
          <div className="row">
            <div className="twelve columns nav-tabs">
              <div className="active nav-tab">
                <a href="#">Top</a>
              </div>
              <div className="nav-tab">
                <a href="#">New</a>
              </div>
            </div>
          </div>
          <div name="projectList">
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

const mapStateToProps = state => (
  {
    projects: state.projects.projects
  }
);

const mapDispatchToProps = dispatch => (
  {
    getProjects: () => dispatch(fetchProjects())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectBoard);

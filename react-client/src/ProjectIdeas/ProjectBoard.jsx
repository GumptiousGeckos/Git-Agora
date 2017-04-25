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

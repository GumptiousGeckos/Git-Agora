import React from 'react';
import { connect } from 'react-redux';

import ProjectBoardEntry from './ProjectBoardEntry.jsx';
import { fetchProjects } from './projectActions';

export class ProjectBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: 'top'
    };
    this.toggleNavTabs = this.toggleNavTabs.bind(this);
  }

  componentWillMount() {
    const { getProjects } = this.props;
    getProjects();
  }

  toggleNavTabs(tab) {
    this.setState({
      active: tab
    });
  }

  render() {
    const { projects } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="twelve columns nav-tabs">
            <div
              className={'nav-tab ' + (this.state.active === 'top' ? 'active-tab' : '')}
              onClick={() => this.toggleNavTabs('top')}
            >
              <a>Top</a>
            </div>
            <div
              className={'nav-tab ' + (this.state.active === 'new' ? 'active-tab' : '')}
              onClick={() => this.toggleNavTabs('new')}
            >
              <a>New</a>
            </div>
          </div>
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

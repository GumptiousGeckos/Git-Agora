import React from 'react';
import { connect } from 'react-redux';

import CommentSection from '../CommentSection/CommentSection.jsx';
import CollaboratorsList from './CollaboratorsList.jsx';
import ProjectDetails from './ProjectDetails.jsx';
import ContributionsView from '../Contributions/ContributionsView.jsx';
import ContributorsView from '../Contributors/ContributorsView.jsx';
import { getProjectById, getCollaborators } from './projectViewActions';

export class ProjectView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: 'comments',
      collabActive: 'topContributors'
    };
    this.toggleProjectTabs = this.toggleProjectTabs.bind(this);
    this.toggleCollabTabs = this.toggleCollabTabs.bind(this);
  }

  componentWillMount() {
    const { getProjectById, getCollaborators, match } = this.props;
    getProjectById(match.params.id);
    // getCollaborators(match.params.id);
  }

  toggleProjectTabs(tab) {
    this.setState({
      active: tab
    });
  }

  toggleCollabTabs(tab) {
    this.setState({
      collabActive: tab
    });
  }

  render() {
    const { project, collaborators } = this.props;
    const { id } = this.props.match.params;
    return (
      <div>
        <div className="container">
          <ProjectDetails
            project={project}
          />
          <div className="five columns">
            <button
              className="tabs"
              onClick={() => this.toggleCollabTabs('collaborators')}
            > Collaborators </button>
            <button
              className="tabs"
              onClick={() => this.toggleCollabTabs('topContributors')}
            > Top Contributors </button>
          </div>
          <div className="five columns">
            { this.state.collabActive === 'collaborators' ?
              <div className="bordered text-center underline contributors-view"><h5>Collaborators</h5></div> : ''
            }
            { this.state.collabActive === 'topContributors' ?
              <ContributorsView q="project" q_id={id} /> : ''
            }
          </div>
          <div className="twelve columns margin-top">
            <button
              className="tabs"
              onClick={() => this.toggleProjectTabs('comments')}
            > Comments </button>
            <button
              className="tabs"
              onClick={() => this.toggleProjectTabs('contributions')}
            > Recent Contributions </button>
          </div>
          <div className="twelve columns">
            { this.state.active === 'comments' ?
              <CommentSection topic_id={id} type={'project'} /> : ''
            }
            { this.state.active === 'contributions' ?
              <ContributionsView reqtype="project" projid={project.id} /> : ''
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    project: state.project.project,
    collaborators: state.project.collaborators
  }
);

const mapDispatchToProps = dispatch => (
  {
    getProjectById: id => dispatch(getProjectById(id)),
    getCollaborators: id => dispatch(getCollaborators(id))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectView);

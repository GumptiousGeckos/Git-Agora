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
      active: 'comments'
    };
    this.toggleProjectTabs = this.toggleProjectTabs.bind(this);
  }

  toggleProjectTabs(tab) {
    this.setState({
      active: tab
    });
  }
  componentWillMount() {
    const { getProjectById, getCollaborators, match } = this.props;
    getProjectById(match.params.id);
    // getCollaborators(match.params.id);
  }

  render() {
    const { project, collaborators } = this.props;
    const { id } = this.props.match.params;
    return (
      <div>
        <div className="col-md-9">
          <ProjectDetails
            project={project}
          />
          <div className="container">
            <button
              className="tabs"
              onClick={() => this.toggleProjectTabs('comments')}
            > Comments </button>
            <button
              className="tabs"
              onClick={() => this.toggleProjectTabs('contributions')}
            > Recent Contributions </button>
          </div>
          <div className="container">
            { this.state.active === 'comments' ?
              <CommentSection topic_id={id} type={'project'} /> : ''
            }
            { this.state.active === 'contributions' ?
              <ContributionsView reqtype="project" projid={project.id} /> : ''
            }
          </div>
        </div>
        <div className="col-md-3">
          <ContributorsView q="project" q_id={id} />
        </div>
        <div className="col-md-3">
          <div className="text-center bordered">
            <h1 className="underline">Interested</h1>
            <h2>{project.interested}</h2>
            <button
              className="btn btn-success btn-lg"
            >{"I'm Interested"}</button>
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

import React from 'react';
import { connect } from 'react-redux';
import RepoList from './RepoList/RepoList.jsx';
import ProjectSubmission from './ProjectSubmission/ProjectSubmission.jsx';
import ProjectLoadingPage from './ProjectSubmission/ProjectLoadingPage.jsx';

export const CreateProject = props => (
  <div className="container">
    {props.page === 'SELECT_REPO' ? <RepoList /> : ''}
    {props.page === 'SUBMISSION_PAGE' ? <ProjectSubmission /> : ''}
    {props.page === 'SUBMITTING_PROJECT' ? <ProjectLoadingPage /> : ''}
  </div>
);

const mapStateToProps = state => (
  {
    ...state.createproject
  }
);

export default connect(mapStateToProps)(CreateProject);

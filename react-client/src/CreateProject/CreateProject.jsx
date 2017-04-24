import React from 'react';
import { connect } from 'react-redux';
import RepoList from './RepoList/RepoList.jsx';
import ProjectSubmission from './ProjectSubmission/ProjectSubmission.jsx';

export const CreateProject = props => (
  <div>
    {props.page === 'SELECT_REPO' ? <RepoList /> : ''}
    {props.page === 'SUBMISSION_PAGE' ? <ProjectSubmission /> : ''}
  </div>
);

const mapStateToProps = state => (
  {
    ...state.createproject
  }
);

export default connect(mapStateToProps)(CreateProject);

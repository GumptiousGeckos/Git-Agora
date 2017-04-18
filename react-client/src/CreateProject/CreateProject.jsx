import React from 'react';
import { connect } from 'react-redux';
import RepoList from './RepoList/RepoList.jsx';
import ProjectSubmission from './ProjectSubmission/ProjectSubmission.jsx';

export class CreateProject extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { repo } = this.props;
    return (
      <div>
        {this.props.page === 'SELECT_REPO' ? <RepoList /> : ''}
        {this.props.page === 'SUBMISSION_PAGE' ? <ProjectSubmission /> : ''}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.createproject
  };
};

export default connect(mapStateToProps)(CreateProject);

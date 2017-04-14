import React from 'react';
import { connect } from 'react-redux';
import { fetchRepoList } from './repoListActions';
import RepoListEntry from './RepoListEntry.jsx';

export class RepoList extends React.Component {

  componentWillMount() {
    this.props.fetchList();
  }

  render() {
    const { repos } = this.props;
      return (
        <div>
          <h2> Repo List </h2>
          {repos.map( (repo) => 
            <RepoListEntry key={repo.id} repo={repo} />
          )}
        </div>
      );
  }
};

const mapStateToProps = (state) => {
  return {
    repos: state.repos.RepoList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchList: () => { dispatch(fetchRepoList()) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);
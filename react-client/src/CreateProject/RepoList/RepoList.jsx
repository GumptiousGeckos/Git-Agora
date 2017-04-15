import React from 'react';
import { connect } from 'react-redux';
import { fetchRepoList, selectRepo, moveToSubmission } from './repoListActions';
import RepoListEntry from './RepoListEntry.jsx';

export class RepoList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchList();
  }

  render() {
    const { list, selected, repoClick, buttonClick } = this.props;
    return (
      <div>
        <h2> Repo List </h2>
        {list.map(repo => {
          return <RepoListEntry key={repo.id} repo={repo} handleClick={repoClick} />
        })}
        <button onClick={()=>buttonClick()}> Select Project </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.createproject.list,
    selected: state.createproject.selectedRepo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchList: () => { dispatch(fetchRepoList()); },
    repoClick: (repo) => { dispatch(selectRepo(repo)); },
    buttonClick: () => { dispatch(moveToSubmission()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);

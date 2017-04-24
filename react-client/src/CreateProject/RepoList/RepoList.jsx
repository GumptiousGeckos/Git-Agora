import React from 'react';
import { connect } from 'react-redux';
import { fetchRepoList, selectRepo, moveToSubmission } from './repoListActions';
import RepoListEntry from './RepoListEntry.jsx';

export class RepoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: null
    };
    this.handleRepoClick = this.handleRepoClick.bind(this);
  }

  componentWillMount() {
    this.props.fetchList();
  }

  handleRepoClick(repo) {
    this.props.repoClick(repo);
    if (this.state.active === repo.id) {
      this.setState({ active: null });
    } else {
      this.setState({ active: repo.id });
    }
  }

  render() {
    const { list, selected, repoClick, buttonClick } = this.props;
    return (
      <div id="repo-list-page">
        <h1> Repo List </h1>
        <div className="repo-list">
          {list.map((repo) => {
            return (
              <RepoListEntry
                key={repo.id}
                repo={repo}
                active={this.state.active === repo.id}
                handleClick={this.handleRepoClick}
              />
            );
          })}
        </div>
        <button
          id="select-project"
          className="button-primary"
          onClick={() => buttonClick()}
        > Select Project </button>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    list: state.createproject.list,
    selected: state.createproject.selectedRepo
  }
);

const mapDispatchToProps = dispatch => (
  {
    fetchList: () => { dispatch(fetchRepoList()); },
    repoClick: (repo) => { dispatch(selectRepo(repo)); },
    buttonClick: () => { dispatch(moveToSubmission()); }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);

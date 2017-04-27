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
        <div id="repo-list-header">
          <div id="repo-list-title"> Pick a project: </div>
          <div> {"Dont see your project? Make sure that it isn't already shared!"} </div>
        </div>
        <div id="repo-list">
          {list.map(repo => (
            <RepoListEntry
              key={repo.id}
              repo={repo}
              active={this.state.active === repo.id}
              handleClick={this.handleRepoClick}
            />
          ))}
        </div>
        { this.state.active !== null ?
          <button
            id="repo-list-proceed"
            className="button-primary"
            onClick={() => buttonClick()}
          > Proceed </button>
          : ''
        }
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

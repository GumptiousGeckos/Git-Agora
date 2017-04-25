import React from 'react';
import { connect } from 'react-redux';

import ProjectBoardEntry from '../ProjectIdeas/ProjectBoardEntry.jsx';
import { fetchProjects } from '../ProjectIdeas/projectActions';
import { updateSearchText, getProjectsByTag } from './filterActions';

export class FilterBoard extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentWillMount() {
    const { getProjects } = this.props;
    getProjects();
  }

  handleSearch(e) {
    const { searchQuery, getProjectsByTag } = this.props;
    e.preventDefault();
    this.refs.input.value = '';
    getProjectsByTag(searchQuery.toLowerCase());
  }

  render() {
    const { projects, updateSearchText } = this.props;

    return (
      <div className="container">
          <form className="filter-search">
            <div className="row">
              <input
                className="six columns filter-search-input"
                placeholder="Search for a category"
                ref="input"
                name="searchQuery"
                onChange={(e) => { updateSearchText(e.target.value); }}
              />
              <button
                className="six columns filter-search-button"
                type="submit"
                onClick={this.handleSearch}
              >
                <span className="fa fa-search fa-lg"></span>
              </button>
            </div>
          </form>
          {
            projects.map(project =>
              <ProjectBoardEntry
                key={project.id}
                project={project}
              />
            )
          }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects.projects,
  searchQuery: state.filter.searchQuery
});

const mapDispatchToProps = dispatch => ({
  getProjects: () => dispatch(fetchProjects()),
  updateSearchText: text => dispatch(updateSearchText(text)),
  getProjectsByTag: tag => dispatch(getProjectsByTag(tag))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterBoard);

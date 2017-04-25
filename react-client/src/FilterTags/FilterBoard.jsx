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
      <div>
        <div className="col-md-12 text-center">
          <form className="navbar-form">
            <div className="input-group add-on">
              <input
                className="form-control"
                placeholder="Search for a category"
                ref="input"
                name="searchQuery"
                onChange={(e) => { updateSearchText(e.target.value); }}
              />
              <div className="input-group-btn">
                <button
                  className="btn btn-default"
                  type="submit"
                  onClick={this.handleSearch}
                >
                  <span className="glyphicon glyphicon-search" />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-12">
          {
            projects.map(project =>
              <ProjectBoardEntry
                key={project.id}
                project={project}
              />
            )
          }
        </div>
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

import React from 'react';
import { connect } from 'react-redux';
import { WithContext as ReactTags } from 'react-tag-input';
import { backToRepos, projectDescription, submitProject } from './projectSubmissionActions';

export class ProjectSubmission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      suggestions: ['javascript', 'react', 'npm module']
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
  }

  handleDelete(i) {
    const tags = this.state.tags;
    tags.splice(i, 1);
    this.setState({ tags });
  }

  handleAddition(tag) {
    const tags = this.state.tags;
    tags.push({
      id: tags.length + 1,
      text: tag
    });
    this.setState({ tags });
  }

  render() {
    const { name, description, backButtonClick, inputDescription, submitProjectClick } = this.props;
    const { url, html_url, id } = this.props.selected;
    const { tags, suggestions } = this.state;
    return (
      <div id="proj-sub-page">
        <div id="proj-sub-header">
          <div id="proj-sub-title"> Share your project: </div>
          <div> {'Enter a description and tags to help others find your project!'} </div>
        </div>
        <button onClick={() => backButtonClick()}> Choose Another Project </button>
        <form id="proj-sub-form">
          <label htmlFor="projname">Project Name:</label>
          <input
            type="text"
            className="u-full-width"
            id="projname"
            value={this.props.selected.name}
            readOnly
          />
          <label htmlFor="projdesc">Description:</label>
          <textarea
            type="text"
            className="u-full-width"
            id="projdesc"
            onChange={e => inputDescription(e.target.value)}
          />
          <label htmlFor="tags">Tags:</label>
          <ReactTags
            tags={tags}
            inline={false}
            suggestions={suggestions}
            handleDelete={this.handleDelete}
            handleAddition={this.handleAddition}
          />
        </form>
        <button
          className="button-primary"
          onClick={() => {
            description.length === 0 ?
            alert('Please enter a description.')
            :
            tags.length === 0 ?
            alert('Please add a tag.')
            :
            submitProjectClick(name, id, description, html_url, url, tags);
          }}
        >
          Share Project!
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    selected: state.createproject.selectedRepo,
    name: state.createproject.name,
    description: state.createproject.description
  }
);

const mapDispatchToProps = dispatch => (
  {
    inputDescription: (description) => { dispatch(projectDescription(description)); },
    backButtonClick: () => { dispatch(backToRepos()); },
    submitProjectClick: (name, projectId, description, link, api, tags) => {
      dispatch(submitProject(name, projectId, description, link, api, tags));
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSubmission);

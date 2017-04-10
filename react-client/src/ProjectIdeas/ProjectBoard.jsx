import React from 'react';
import { connect } from 'react-redux';

import ProjectBoardEntry from './ProjectBoardEntry.jsx';
import { createProject } from './projectActions';

class ProjectBoard extends React.Component {

  redirectToProjectView() {
    console.log('redirect to PV');
  }

  redirectToProjectCreation() {
    // Create Project button hardcoded to create dummy data
    this.props.dispatch(createProject());
  }

  render() {
    const { projectPosts } = this.props;

    return (
      <div>
        <h2>Projects</h2>
        <button onClick={this.redirectToProjectCreation.bind(this)}>Create Project</button>
        {
          projectPosts.map((post) =>
              <ProjectBoardEntry
                key={post.id}
                onClick={this.redirectToProjectView.bind(this)}
                post={post}
              />
          )
        }
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    projectPosts: state.projectPosts.posts
  };
};

export default connect(mapStateToProps)(ProjectBoard);
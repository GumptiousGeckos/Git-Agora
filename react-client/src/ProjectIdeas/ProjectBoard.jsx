import React from 'react';
import { connect } from 'react-redux';

import ProjectBoardEntry from './ProjectBoardEntry.jsx';

// import { testFunction } from './testAction';

class ProjectBoard extends React.Component {

  componentWillMount() {
    // commented out for jest test
    // this.props.dispatch(testFunction());
  }

  redirectToProjectView() {
    console.log('redirect to PV');
  }

  redirectToProjectCreation() {
    console.log('redirect to PC');
  }

  render() {
    // list of posts
    const { projectPosts } = this.props;

    if (projectPosts.length > 0) {
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
    } else {
      return (
        <div>
          <h1>PROJECTS</h1>
        </div>
      );
    }

  }
};

const mapStateToProps = (state) => {
  return {
    // projectPosts: state.projectPosts.posts
    projectPosts: [
      {
        id: '0',
        title: "Git Agora",
        description: "This project is awesome. Come join.",
        link: "www.git-agora.com"
      },
      {
        id: '1',
        title: "Favor Trader",
        description: "Trade favors with your friends! See who has done the most favors today!",
        link: "www.favortrader.com"
      }
    ],
  };
};

export default connect(mapStateToProps)(ProjectBoard);
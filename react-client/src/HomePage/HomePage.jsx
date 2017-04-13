import React from 'react';
import { connect } from 'react-redux';

import ProjectBoardEntry from '../ProjectIdeas/ProjectBoardEntry.jsx';

class HomePage extends React.Component {

  render() {
    const { hotProjects } = this.props;

    return (
      <div className="container">
        <div className="text-center">
          <h1>Trending Tech News</h1>
        </div>
        <div className="row news-border">
          <div className="col-md-4">
            <div className="thumbnail">
              <a href="">
                <img src="https://images-cdn.9gag.com/photo/4292339_700b_v1.jpg" />
                <div className="caption text-center">
                  <p>How to write personal narratives</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="thumbnail">
              <a href="">
                <img src="https://images-cdn.9gag.com/photo/4292339_700b_v1.jpg" />
                <div className="caption text-center">
                  <p>How to write personal narratives and How to write personal narratives and How to write personal narratives and How to write personal narratives end</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="thumbnail">
              <a href="">
                <img src="https://images-cdn.9gag.com/photo/4292339_700b_v1.jpg" />
                <div className="caption text-center">
                  <p>How to write personal narratives</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center col-md-12">
          <h1>Hot Projects</h1>
        </div>
        <div className="list-group">
          {
            hotProjects && hotProjects.map((project) =>

              <button type="button" className="list-group-item" key={project.id}>
                <span>{project.title}</span>
                <h4>{project.description}</h4>
              </button>
            )
          }
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    hotProjects: [{id: 0, title: 'hello', description: 'world', likes: 1, dislikes: 0}, {id: 1, title: 'hello', description: 'world', likes: 1, dislikes: 0}]
  };
};

export default connect(mapStateToProps)(HomePage);
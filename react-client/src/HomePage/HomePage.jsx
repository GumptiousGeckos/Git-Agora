import React from 'react';
import { connect } from 'react-redux';

import ProjectBoardEntry from '../ProjectIdeas/ProjectBoardEntry.jsx';
import { fetchHotProjects, fetchHotNews } from './homepageActions';


class HomePage extends React.Component {

  componentWillMount() {
    const { getHotProjects, getHotNews } = this.props;
    getHotProjects();
    getHotNews();
  }

  render() {
    const { hotProjects, hotNews } = this.props;

    return (
      <div className="container">
        <div className="text-center">
          <h1>Trending Tech News</h1>
        </div>
        <div className="row news-border">
          {
            hotNews && hotNews.map((article) =>
              <div className="col-md-4">
                <div className="thumbnail">
                  <a href={article.url}>
                    <h4 className="title">{article.title}</h4>
                    <img src={article.urlToImage} />
                    <div className="caption text-center">
                      <p>{article.description}</p>
                    </div>
                  </a>
                </div>
              </div>
            )
          }
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
    hotProjects: state.homepage.hotProjects,
    hotNews: state.homepage.hotNews
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHotProjects: () => dispatch(fetchHotProjects()),
    getHotNews: () => dispatch(fetchHotNews())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
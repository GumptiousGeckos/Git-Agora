import React from 'react';
import { connect } from 'react-redux';

import NewsArticleEntry from './NewsArticleEntry.jsx';
import { fetchArticles } from './newsActions';

export class NewsBoard extends React.Component {
  componentWillMount() {
    const { getArticles } = this.props;
    getArticles();
  }

  render() {
    const { articles } = this.props.news;

    if (articles && articles.length > 0) {
      return (
        <div className="container">
          <div className="row">
            <div className="twelve columns nav-tabs">
              <div className="active nav-tab">
                <a href="#">Top</a>
              </div>
              <div className="nav-tab">
                <a href="#">Trending</a>
              </div>
              <div className="nav-tab">
                <a href="#">New</a>
              </div>
            </div>
          </div>
          {articles.map((article) => 
            <NewsArticleEntry key={article.published_at} article={article} />
          )}
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="twelve columns nav-tabs">
              <div className="active nav-tab">
                <a href="#">Top</a>
              </div>
              <div className="nav-tab">
                <a href="#">Trending</a>
              </div>
              <div className="nav-tab">
                <a href="#">New</a>
              </div>
            </div>
          </div>
        Fetching articles!
        </div>
      );
    }
  }
};

const mapStateToProps = (state) => {
  return {
    news: state.news
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getArticles: () => dispatch(fetchArticles())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsBoard);
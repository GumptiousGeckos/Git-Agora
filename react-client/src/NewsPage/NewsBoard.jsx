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
        <div className="col-md-12">
          <ul className="nav nav-tabs">
            <li className="active">
              <a href="#">Top</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">New</a>
            </li>
          </ul>
          <div name="newsList">
            {articles.map((article) =>
              <NewsArticleEntry key={article.published_at} article={article} />
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div className="col-md-12">
          <ul className="nav nav-tabs">
            <li className="active">
              <a href="#">Top</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">New</a>
            </li>
          </ul>
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
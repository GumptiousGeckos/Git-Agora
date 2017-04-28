import React from 'react';
import { connect } from 'react-redux';

import NewsArticleEntry from './NewsArticleEntry.jsx';
import { fetchArticles } from './newsActions';

export class NewsBoard extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       active: 'top'
     };
     this.toggleNavTabs = this.toggleNavTabs.bind(this);
   }
 
  componentWillMount() {
    const { getArticles } = this.props;
    getArticles();
  }

  toggleNavTabs(tab) {
    this.setState({
      active: tab
    });
  }
 

  render() {
    const { articles } = this.props.news;

    if (articles && articles.length > 0) {
      return (
        <div className="container">
          <div className="row">
            <div className="twelve columns nav-tabs">
              <div className={'nav-tab ' + (this.state.active === 'top' ? 'active-tab' : '')} onClick={() => this.toggleNavTabs('top')}>
                <a>Top</a>
              </div>
              <div className={'nav-tab ' + (this.state.active === 'new' ? 'active-tab' : '')} onClick={() => this.toggleNavTabs('new')}>
                <a>New</a>
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
              <div className={'nav-tab ' + (this.state.active === 'top' ? 'active-tab' : '')} onClick={() => this.toggleNavTabs('top')}>
                <a>Top</a>
              </div>
              <div className={'nav-tab ' + (this.state.active === 'new' ? 'active-tab' : '')} onClick={() => this.toggleNavTabs('new')}>
                <a>New</a>
              </div>
            </div>
          </div>
          <div id="loading-page">
            <i className="fa fa-spinner fa-pulse fa-5x fa-fw" />
            <div> Searching for top rated news articles! </div>
          </div>
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
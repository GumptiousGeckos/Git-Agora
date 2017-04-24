import React from 'react';
import { connect } from 'react-redux';
import CommentSection from '../CommentSection/CommentSection.jsx';
import Votes from '../Votes/Votes.jsx';
import { getArticleById } from './articleActions.js';

export class ArticleView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { getArticleById, match } = this.props;
    getArticleById(match.params.id);
  }

  render() {
    let { votes, title, url, source, description, vote_type, id } = this.props.article;
    return (
      <div className="container article-view">
          <div className="row article-view-entry">
              <Votes votes={votes} topic_type={'article'} vote_type={vote_type} topic_id={id}/>
            <div className="ten columns">
              <a href={url}>
                <div className="article-view-title">{title}</div>
              </a>
              <div className="article-view-description">{description}</div>
              <div className="article-view-source">-{source}</div>
            </div>
          </div>
          <div className="row">
            <CommentSection
              projectId={id}
              type={'article'}/>
          </div>
      </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    article: state.article.article
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getArticleById: id => dispatch(getArticleById(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleView);